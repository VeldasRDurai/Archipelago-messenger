import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { startChatAction } from '../../../../redux/chatDetails/chatDetailsActions' ;

import ProfilePicture from './ProfilePicture/ProfilePicture';

const Div = styled.div`
    @media (max-width:425px) {
        box-sizing:border-box;
        height:60px;
        width:100%;
        overflow:hidden;
        padding:0 3%;
        display:flex;
        flex-direction:row;
        align-items:center;
        border-bottom: 1px solid #999; 
        font-family:'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif';
        #image {
           height: 40px;
           width:40px;
           border-radius:20px;
           /* background-color: rgb( ${Math.floor((Math.random()*255)+0)} , ${Math.floor((Math.random()*255)+0)} , ${Math.floor((Math.random()*255)+0)} ); */
        }
        #email-lastMsg {
            margin-left:10px;
            width:60%;
            white-space:nowrap;
            overflow:hidden;
            #email {
                font-size:17px;
                font-weight:900;
                width:100%;
                overflow:hidden;
            }
            #lastMsg{
                font-size: 15px;
                color: #999;
                width:100%;
                overflow:hidden;
            }
        }
        #lastMsgTime-unRead {
            margin-left:auto;        
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            #lastMsgTime{
                color:${ ({unRead}) => unRead === 0 ? 'inherit':'#06d755' };
                font-size:15px;
            }
            #unRead {
                display:${ ({unRead}) => unRead === 0 ? 'none':'flex' };
                justify-content:center;
                align-items:center;
                height: 20px;
                width: 20px;
                border-radius:10px;
                color:white;
                background-color:#06d755;
            }
        }
    }
`;

const ListItem = ({ value }) => {
    const { email } = useSelector( state => state.userDetails );
    const dispatch = useDispatch();
    const [ showDp, setShowDp ] = useState(false);
    const [ clickEvent, setClickEvent ] = useState({});

    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();
        
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

        // email: name : id : lastSendBy : lastMessage : lastMessageTime :
        // lastDelivered : lastReaded : unRead  : picture  : about

    return(

        <Div onClick={ () => dispatch( startChatAction({ 
                chattingWithEmail : value.email, 
                chattingWithName : value.name,
                chattingWithId : value.id,
                chattingWithPicture : value.picture ,
                chattingWithAbout : value.about
            }) )}
            unRead={value.unRead} >
                

            <img id='image' src={ value.picture } alt='profile picture'
                onClick={ e => { setShowDp(true); e.stopPropagation();setClickEvent(e); } } />
            <div id='email-lastMsg' > 
                <div id='email'> 
                    {
                        capitalize(value.name)
                    }
                </div>
                <div id='lastMsg'> 
                    {
                        `${ value.lastSendBy === email ? 'You' : capitalize(value.name) } : ${value.lastMessage}`
                    } 
                </div>   
            </div>
            <div id='lastMsgTime-unRead' > 
                <div id='lastMsgTime'> 
                    { 
                        datesAreOnSameDay(new Date(), new Date(value.lastMessageTime)) ? 
                            new Date(value.lastMessageTime).toLocaleString( undefined , { hour:'2-digit', minute:'2-digit' } ) : 
                            new Date(value.lastMessageTime).toLocaleDateString()
                    } 
                </div>
                <div id='unRead'>{ value.unRead } </div>  
            </div>
            { showDp && <ProfilePicture setShowDp={setShowDp} picture={value.picture} clickEvent={clickEvent} /> } 
        </Div>
    );
}

export default ListItem;
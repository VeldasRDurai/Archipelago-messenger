import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { startChatAction } from '../../../../redux/chatDetails/chatDetailsActions' ;

const Div = styled.div`
    @media (max-width:425px) {
        height:60px;
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
           background-color: rgb( ${Math.floor((Math.random()*255)+0)} , ${Math.floor((Math.random()*255)+0)} , ${Math.floor((Math.random()*255)+0)} );
        }
        #email-lastMsg {
            margin-left:10px;
            #email {
                font-size:20px;
                font-weight:900;
            }
            #lastMsg{
                font-size: 15px;
                color: #999;
                overflow:hidden;
            }
        }
        #lastMsgTime-unRead {
            margin-left:auto;        
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            #lastMsgTime{
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

    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

    return(
        <Div onClick={ () => dispatch( startChatAction({ withEmail:value.email }) )}
            unRead={value.unRead} >
                
            <div id='image'> </div>
            <div id='email-lastMsg' > 
                <div id='email'> { value.email } </div>
                <div id='lastMsg'> 
                    {
                        ( value.lastSendBy === email ? 'you' : value.lastSendBy ) + " : " + 
                        ( value.lastMsg.length < 25 ? value.lastMsg : value.lastMsg.slice(0,24) + '...')
                    } 
                </div>   
            </div>
            <div id='lastMsgTime-unRead' > 
                <div id='lastMsgTime'> 
                    { 
                        datesAreOnSameDay(new Date(), new Date(value.lastMsgTime)) ? 
                            new Date(value.lastMsgTime).toLocaleTimeString( [], {timeStyle: 'short'} ) : 
                            new Date(value.lastMsgTime).toLocaleDateString()
                    } 
                </div>
                <div id='unRead'>{ value.unRead } </div>  
            </div>
        </Div>
    );
}

export default ListItem;
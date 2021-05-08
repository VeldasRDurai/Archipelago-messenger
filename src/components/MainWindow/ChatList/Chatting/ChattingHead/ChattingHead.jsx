import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Profile from './Profile/Profile';

import { endChatAction } from '../../../../../redux/chatDetails/chatDetailsActions';

const Div = styled.div`
    @media (max-width:425px) {
        /* overflow:hidden; */
        height:65px;
        width:100%;
        position:absolute;
        z-index:10;
        top:0px;
        box-sizing:border-box;
        padding:0 8px;
        box-shadow:0px 0px 5px 0px #333;
        background-color:#075e54;
        display:flex;
        flex-direction:row;
        align-items:center;
        #image {
           height: 40px;
           width: 40px;
           border-radius:20px;
        }
        #chatting-with{
            color:white;
            margin-left:8px;
            width:60%;
            overflow:hidden;
            #online {
                font-family:'fangsong';
                font-size:14px;
                height:15px;
                position:relative;
                #lastSeen {
                    position:absolute;
                    animation: scrollLastSeen 12s cubic-bezier(0, 1.07, 1, 0.4) both;
                    animation-iteration-count: infinite ;
                    @keyframes scrollLastSeen {
                        0% {left:100%;}
                        100%{left:-100%;}
                    }
                }
            }
            #name{
                font-family: 'Merienda One', cursive;
                font-size:16px;
            }
        }
    }
`;

const ChattingHead = () => {
    const { email, _id } = useSelector( state => state.userDetails );
    const { socket } = useSelector( state => state.socket );
    const { chattingWithPicture, chattingWithEmail, chattingWithName, online, lastSeen, isTyping } = useSelector( state => state.chatDetails );
    const dispatch = useDispatch();
    
    const goBack = () => {
        dispatch( endChatAction() );
        socket.emit('end-chat',{ _id, chattingWithEmail });
        socket.emit('typing',{ isTyping:false, chattingWithEmail, email });
        socket.emit('get-history', { _id } );
    }

    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();
    const datesAreConsecutive = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        Math.abs( first.getDate() - second.getDate() ) === 1 ;

    const [ showProfile, setShowProfile ] = useState(false);

    return(
        <Div>
            <svg id='back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                onClick={goBack} >
                <path xmlns="http://www.w3.org/2000/svg" 
                    fill="#fff" 
                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            </svg>
            <img id='image' onClick={ () => setShowProfile(true) } src={ chattingWithPicture } alt="profile pic" />
            <div id="chatting-with"  onClick={ () => setShowProfile(true) } > 
                <div id='name' > 
                    { 
                        chattingWithName.length > 20 ? 
                            chattingWithName.slice(0,16) + '...' : 
                            chattingWithName 
                    } 
                </div>
                <div id='online'>
                    {
                        isTyping ? 'typing ...' :
                        online === undefined ? 'loading...':
                        online ? 'online':
                        <div id='lastSeen' > 
                            {
                                `last seen ${ datesAreOnSameDay(new Date(),new Date(lastSeen)) ? 'today':
                                    datesAreConsecutive(new Date(),new Date(lastSeen)) ? 'yesterday': 
                                        new Date(lastSeen).toLocaleString( undefined , { year: 'numeric', month: 'long', day: 'numeric'}) } at 
                                        ${ new Date(lastSeen).toLocaleString( undefined , { hour:'2-digit', minute:'2-digit' } ) }`
                            }
                        </div>
                    }
                </div>
            </div>
            { showProfile && <Profile setShowProfile={setShowProfile} /> }
        </Div>
    );
}

export default ChattingHead;
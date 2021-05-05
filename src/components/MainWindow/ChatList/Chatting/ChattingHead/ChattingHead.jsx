import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Profile from './Profile/Profile';

import { endChatAction } from '../../../../../redux/chatDetails/chatDetailsActions';

const Div = styled.div`
    @media (max-width:425px) {
        overflow:hidden;
        height:13%;
        box-sizing:border-box;
        padding:0 8px;
        box-shadow:0px 0px 5px 0px #333;
        /* background-image: linear-gradient( 223deg, #00d890, #075e55 90% ); */
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
            width:80%;
            overflow:hidden;
            #online {
                font-family:'fangsong';
                font-size:14px;
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
        socket.emit('end-chat');
        socket.emit('typing',{ isTyping:false, chattingWithEmail, email });
        socket.emit('get-history', { _id } );
    }

    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

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
                <div id='name' > { chattingWithName.length > 15 ? chattingWithName.slice(0,11) + '...' : chattingWithName } </div>
                <div id='online'>
                    {
                        isTyping ? 'typing ...' :
                        online === undefined ? 'loading...':
                        online ? 'online':
                        `last seen ${ datesAreOnSameDay(new Date(),new Date(lastSeen)) ? 'today': new Date(lastSeen).toLocaleDateString('pt-PT') } at ${ new Date(lastSeen).toLocaleTimeString( [], {timeStyle: 'short'} ) }`
                    }
                </div>
            </div>
            { showProfile && <Profile setShowProfile={setShowProfile} /> }
        </Div>
    );
}

export default ChattingHead;
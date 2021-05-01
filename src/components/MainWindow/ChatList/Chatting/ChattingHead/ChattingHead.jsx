import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


import { endChatAction } from '../../../../../redux/chatDetails/chatDetailsActions';

const Div = styled.div`
    @media (max-width:425px) {
        font-family: 'Merienda One', cursive;
        overflow:hidden;
        height:13%;
        box-sizing:border-box;
        padding:0 8px;
        font-size:18px;
        box-shadow:0px 0px 5px 0px #333;
        /* background-image: linear-gradient( 223deg, #00d890, #107050 90% ); */
        background-color:#075e54;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
        #chatting-with{
            margin-left:8px;
            width:80%;
            overflow:hidden;
        }
    }
`;

const ChattingHead = () => {
    const { email } = useSelector( state => state.userDetails );
    const { socket } = useSelector( state => state.socket );
    const { chattingWithEmail } = useSelector( state => state.chatDetails );
    const dispatch = useDispatch();
    
    const goBack = () => {
        dispatch( endChatAction() );
        socket.emit('get-history', { email } );
    }

    return(
        <Div>
            <svg id='back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                onClick={goBack} >
                <path xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            </svg>
            <div id="chatting-with" > 
                {
                    chattingWithEmail.length > 20 ? chattingWithEmail.slice(0,20) + '...' : chattingWithEmail  
                } 
            </div>
        </Div>
    );
}

export default ChattingHead;
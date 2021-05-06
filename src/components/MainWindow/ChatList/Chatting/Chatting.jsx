import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ChattingHead from './ChattingHead/ChattingHead';
import ChattingContent from './ChattingContent/ChattingContent';
import ChattingKeyboard from './ChattingKeyboard/ChattingKeyboard';

const Div = styled.div`
    @media (max-width:425px) {
        height:100vh;
        width:100vw;
        position:absolute;
        left:0;
        display:flex;
        flex-direction:column;
        background-color:#e5ddd5;
        animation: chatOut 0.2s linear alternate both;
        z-index:9;

        @keyframes chatOut {
            from {top:100vh;}
            to {top:0;}
        }
    }
`;

const Chatting = () => {
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { chattingWithEmail, chattingWithName, chattingWithId } = useSelector( state => state.chatDetails );
    const { socket } = useSelector( state => state.socket );
    
    useEffect( () => {
        socket.emit('start-chat', { email, name, _id, chattingWithEmail, chattingWithName, chattingWithId });
    },[]);

    return(
        <Div>
            <ChattingHead />
            <div style={{height:'13%'}} ></div>
            <ChattingContent />
            <div style={{height:'9%'}} ></div>
            <ChattingKeyboard />
        </Div>
    );
}

export default Chatting; 
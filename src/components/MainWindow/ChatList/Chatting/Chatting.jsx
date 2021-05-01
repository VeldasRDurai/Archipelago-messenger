import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { appendNewChat } from '../../../../redux/chatDetails/chatDetailsActions';
import { endChatAction } from '../../../../redux/chatDetails/chatDetailsActions';

import ChattingHead from './ChattingHead/ChattingHead';
import ChattingContent from './ChattingContent/ChattingContent';
import ChattingKeyboard from './ChattingKeyboard/ChattingKeyboard';

const Div = styled.div`
    @media (max-width:425px) {
        height:100vh;
        width:100vw;
        position:absolute;
        top:0;
        left:0;
        /* background-color:yellow; */
        display:flex;
        flex-direction:column;
    }
`;

const Chatting = () => {
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { chattingWithEmail, chattingWithName, chattingWithId, oldChat } = useSelector( state => state.chatDetails );
    const { socket } = useSelector( state => state.socket );
    const dispatch = useDispatch();
    
    const [ message , setMessage ] = useState('');

    useEffect( () => {
        socket.emit('start-chat', { email, name, _id, chattingWithEmail, chattingWithName, chattingWithId });
    },[]);

    const sendMsg = () => {
        socket.emit( 'send-message' , { email:email , with:chattingWithEmail , message:message} );
        dispatch( appendNewChat({ newChat: { sendBy:email , msg:message , msgTime: new Date() } }) );
    }
    const goBack = () => {
        dispatch( endChatAction() );
        socket.emit('get-history', { email } );
    }
    return(
        <Div>
            <ChattingHead />
            <div style={{ display:'none' }} >
                <div onClick={ () => goBack() } > back </div>
                Chatting with { chattingWithEmail }
                <input type="text" onChange={ e => setMessage(e.target.value) } />
                <button onClick={()=>sendMsg()} > send </button>
                <div>
                    this
                    { oldChat.map( item => <div> { item.sendBy + ' :- ' + item.msg} </div> ) }
                </div>
            </div>
            <ChattingContent />
            <ChattingKeyboard />
        </Div>
    );
}

export default Chatting; 
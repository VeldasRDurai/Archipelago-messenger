import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { appendNewChatAction } from '../../../../../redux/chatDetails/chatDetailsActions';

const Div = styled.div`
    @media (max-width:425px) {
        margin-top: auto;
        background-color:#e5ddd5;
        height: 8%;
        display: flex;
        justify-content:center;
        align-items: center;
        #message{
            height:28px;
            width:85%;
            border:none;
            border-radius:14px;
            outline:none;
            box-sizing:border-box;
            padding:7px;
            font-size:14px;
        }
        #send{
            margin:0 5px;
            height: 30px;
            width: 30px;
            box-sizing: border-box;
            padding: 5px;
            border-radius: 15px;
            background-color: #075e54;
        }
    }
`;

const ChattingKeyboard = () => {
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { chattingWithEmail, chattingWithName, chattingWithId } = useSelector( state => state.chatDetails );
    const { socket } = useSelector( state => state.socket );
    const dispatch = useDispatch();

    const refInput = useRef()
    const [ message , setMessage ] = useState('');
    const [ imTyping, setImTyping ] = useState(false);

    useEffect(() => {
        if( message !== '' && !imTyping ){
            setImTyping(true);
            socket.emit('typing',{ isTyping:true, chattingWithEmail, email });
        } 
        if( message === '' && imTyping  ){
            setImTyping(false);
            socket.emit('typing',{ isTyping:false, chattingWithEmail, email });
        } 
    }, [ message ])

    const sendMsg = () => {
        socket.emit( 'send-message' , { email, name, _id, chattingWithEmail, chattingWithName, chattingWithId, message } );
        dispatch( appendNewChatAction({ newChat: { sendBy:email , message:message , messageTime: new Date() } }) );
        refInput.current.value = '';
        setMessage('');
    }

    return(
        <Div>
            <input ref={refInput} id="message" type="text" placeholder='Type a message' autoComplete='off' spellCheck='false' 
                onChange={ e => setMessage(e.target.value) } />
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" 
                id='send'  onClick={()=>sendMsg()} >
                <path fill='white' d="M2 3v18l20-9L2 3zm2 11l9-2-9-2V6.09L17.13 12 4 17.91V14z" />
            </svg>
        </Div>
    );
}

export default ChattingKeyboard;
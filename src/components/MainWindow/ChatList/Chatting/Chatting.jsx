import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { appendNewChat } from '../../../../redux/chatDetails/chatDetailsActions';
import { endChatAction } from '../../../../redux/chatDetails/chatDetailsActions';

const Div = styled.div`
    @media (max-width:425px) {
        height:100vh;
        width:100vw;
        position:absolute;
        top:0;
        left:0;
        background-color:yellow;
    }
`;

const Chatting = () => {
    const { email } = useSelector( state => state.userDetails );
    const { withEmail , oldChat } = useSelector( state => state.chatDetails );
    const { socket } = useSelector( state => state.socket );
    const dispatch = useDispatch();
    
    const [ message , setMessage ] = useState('');

    useEffect( () => {
        socket.emit('createRoom', { email:email , with:withEmail });
    },[ socket , email , withEmail ]);

    const sendMsg = () => {
        socket.emit( 'sendMsg' , { email:email , with:withEmail , message:message} );
        dispatch( appendNewChat({ newChat: { sendBy:email , msg:message , msgTime: new Date() } }) );
    }
    const goBack = () => {
        dispatch( endChatAction() );
        socket.emit('getHistory', { email } );
    }
    return(
        <Div>
            <div onClick={ () => goBack() } > back </div>
            Chatting with { withEmail }
            <input type="text" onChange={ e => setMessage(e.target.value) } />
            <button onClick={()=>sendMsg()} > send </button>
            <div>
                this
                { oldChat.map( item => <div> { item.sendBy + ' :- ' + item.msg} </div> ) }
            </div>
        </Div>
    );
}

export default Chatting; 
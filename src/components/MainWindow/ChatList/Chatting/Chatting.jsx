import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height:100vh;
    width:100vw;
    position:absolute;
    top:0;
    left:0;
    background-color:yellow;
`;

const Chatting = (props) => {
    const [ message , setMessage ] = useState('');

    useEffect( () => {
        props.socket.emit('createRoom', { userData:props.userData , with:props.with });
    },[]);

    const sendMsg = () => {
        props.socket.emit( 'sendMsg' , { userData:props.userData , with:props.with , message:message} );
    }
    return(
        <Div>
            Chatting with { props.with }
            <input type="text" onChange={ e => setMessage(e.target.value) } />
            <button onClick={()=>sendMsg()} > send </button>
        </Div>
    );
}

export default Chatting; 
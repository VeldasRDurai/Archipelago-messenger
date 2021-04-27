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
    },[props.socket , props.userData , props.with]);

    const sendMsg = () => {
        props.socket.emit( 'sendMsg' , { userData:props.userData , with:props.with , message:message} );
    }
    const goBack = () => {
        // props.socket.emit('leftRoom' ,{ userData:props.userData , with:props.with } );
        props.setChatting({ isChatting: false , with : undefined });
    }
    return(
        <Div>
            <div onClick={ () => goBack() } > back </div>
            Chatting with { props.with }
            <input type="text" onChange={ e => setMessage(e.target.value) } />
            <button onClick={()=>sendMsg()} > send </button>
            <div>
                {/* { props.allChat } */}this
            </div>
        </Div>
    );
}

export default Chatting; 
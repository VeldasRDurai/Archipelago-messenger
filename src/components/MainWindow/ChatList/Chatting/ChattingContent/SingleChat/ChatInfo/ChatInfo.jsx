import React from 'react';
import styled from 'styled-components';

import SingleTick from '../Tick/SingleTick';
import DoubleTick from '../Tick/DoubleTick';
import BlueTick from '../Tick/BlueTick';

const Div = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:12;
    background-color:#0003;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Box = styled.div`
    color:black;
    background-color:whitesmoke;
    font-family: 'Orelega One', cursive ;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width:70%;

    & > * {padding:10px; }
`;

const ChatInfo = ({ showChatInfo, setShowChatInfo, value }) => {
    
    return (
        <Div showChatInfo={showChatInfo} onClick={ () => setShowChatInfo(false) } >
            <Box>
                <div>
                    <div> <BlueTick /> Read </div>
                    <div> 
                        {
                            new Date(value.readedTime).toLocaleString( undefined, {
                                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
                            })
                        } 
                    </div>
                </div>
                <div>
                    <div> <DoubleTick /> Delivered </div>
                    <div> 
                        {
                            new Date(value.deliveredTime).toLocaleString( undefined, {
                                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
                            })
                        } 
                    </div>
                </div>
                <div>
                    <div> <SingleTick /> Sent at </div>
                    <div> 
                        {
                            new Date(value.messageTime).toLocaleString( undefined, {
                                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
                            })
                        } 
                    </div>
                </div>
            </Box>
        </Div>
    )
}

export default ChatInfo;
import React from 'react';
import styled from 'styled-components';

import RightArrow from './RightArrow';

const Div = styled.div`
    margin: 3px 10px;
    height: auto;
    width: auto;
    max-width:60%;
    min-width:25%;
    color: black;
    box-shadow: grey 2px 2px 4px;
    border-radius: 7px;
    padding: 0px 10px;
    font-size: 16px ;
    overflow-wrap: break-word;
    display:flex;
    flex-direction:column;
    position:relative;
    align-self:flex-end; 
    border-top-right-radius:0; 
    background-color:#dcf8c6; 
    #name {
        font-size: 13px;
        font-weight: 600;
        color: #44d19e;
    }
    #time-delivered{
        font-size:10px;
        color:#8c8c8c;
        display:flex;
        align-self:flex-end;
    }
    #arrow{
        position:absolute;

    }
`

const NotSend = ({ value }) => {
    const { message, messageTime } = value;
    return (
        <Div>
            <RightArrow /> 
            <div id='name' > You </div>
            <div id='chat' > { message } </div>
            <div id='time-delivered' >
                <div id='time' > { new Date(messageTime).toLocaleTimeString( undefined , { hour: '2-digit', minute: '2-digit'} ) } </div>
                <div id='delivered'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="15" height="12">
                        <path fill="currentColor" d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"></path>
                    </svg>
                </div>
            </div>
        </Div>
    );
}

export default NotSend;
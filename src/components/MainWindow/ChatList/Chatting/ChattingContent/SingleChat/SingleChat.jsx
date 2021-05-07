import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useSelector } from 'react-redux';

import ChatInfo from './ChatInfo/ChatInfo';
import LeftArrow from './Arrow/LeftArrow';
import RightArrow from './Arrow/RightArrow';
import SingleTick from "./Tick/SingleTick";
import DoubleTick from "./Tick/DoubleTick";
import BlueTick from "./Tick/BlueTick";

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
    #name {
        font-size: 13px;
        font-weight: 600;
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
    ${ ({ hisMessage }) => hisMessage ? 
        css`align-self:flex-start; border-top-left-radius:0; background-color:white; #name{color:#217bec;}`:
        css`align-self:flex-end; border-top-right-radius:0; background-color:#dcf8c6; #name{color:#44d19e;}`
    };
    ${ ({showChatInfo}) => showChatInfo && 
        css`background-color:#075e54;color:white;`
    };
`

const SingleChat = ({ value }) => {
    const { chattingWithEmail, chattingWithName } = useSelector( state => state.chatDetails );
    const { delivered, message, messageTime, readed, sendBy } = value;

    const [ showChatInfo, setShowChatInfo ] = useState(false);

    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return (
        <>
            <Div showChatInfo={showChatInfo} onClick={ () => setShowChatInfo(true) } hisMessage={ sendBy === chattingWithEmail }>
                {
                    sendBy === chattingWithEmail ? 
                        <LeftArrow showChatInfo={showChatInfo} /> : 
                        <RightArrow showChatInfo={showChatInfo} /> 
                }
                <div id='name' > 
                    { 
                        sendBy === chattingWithEmail ?
                            ( chattingWithName.length > 20 ? 
                                capitalize( `${chattingWithName.slice(0,17)} ...`) : 
                                    capitalize(chattingWithName))  : 'You' 
                    }   
                </div>
                <div id='chat' > { message } </div>
                <div id='time-delivered' >
                    <div id='time' > { new Date(messageTime).toLocaleTimeString( [], {timeStyle: 'short'} ) } </div>
                    <div id='delivered'>
                        {
                            sendBy === chattingWithEmail ? null :
                                !delivered ? <SingleTick /> :
                                    !readed ? <DoubleTick /> :
                                        <BlueTick />
                        }
                    </div>
                </div>
                
            </Div>
            {  
                showChatInfo && 
                    <ChatInfo setShowChatInfo={setShowChatInfo} showChatInfo={showChatInfo} value={value} /> 
            }
        </>
    );
}

export default SingleChat;
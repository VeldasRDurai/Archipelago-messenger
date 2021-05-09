import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import DateDiv from './DateDiv/DateDiv';
import NotificationDiv from './NotificationDiv/NotificationDiv';
import SingleChat from './SingleChat/SingleChat';

const Div = styled.div`
    @media (max-width:425px) {
        max-height:80%;
        overflow-x:hidden;
        overflow-y:scroll;
        word-wrap:break-word;
        padding: 0 10px;
        background-color:#e5ddd5;
        display:flex;
        flex-direction:column;
        flex-flow:column-reverse;
    }
`;

const ChattingContent = () => {
    const { oldChat } = useSelector( state => state.chatDetails );
    const refChatDiv = useRef();
    useEffect( () => {
        refChatDiv.current.scrollTop = refChatDiv.current.scrollHeight;
    });
    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

    return(
        <Div ref={refChatDiv} >
            {
                oldChat.map( (item,index) =>  
                    <>
                        <SingleChat key={index} value={item} />
                        {
                            index === oldChat.length - 1 ? <DateDiv date={item.messageTime} /> :
                                !datesAreOnSameDay( new Date(item.messageTime) , new Date( oldChat[index+1].messageTime )) && 
                                <DateDiv date={item.messageTime} />
                        }
                    </>
                ) 
            }
            { oldChat.length >= 1000 && <NotificationDiv /> }
        </Div>
    );
}

export default ChattingContent;
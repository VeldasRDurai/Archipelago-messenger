import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import DateDiv from './DateDiv/DateDiv';
import SingleChat from './SingleChat/SingleChat';

const Div = styled.div`
    @media (max-width:425px) {
        height:92%;
        overflow-x:hidden;
        overflow-y:scroll;
        word-wrap:break-word;
        padding: 0 10px;
        background-color:#e5ddd5;
        display:flex;
        flex-direction:column;
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
                        {
                            index !== 0 ?
                            !datesAreOnSameDay( new Date(item.messageTime) , new Date( oldChat[index-1].messageTime )) &&
                                <DateDiv date={item.messageTime} /> :
                            <DateDiv date={item.messageTime} />
                        }
                        <SingleChat key={index} value={item} />
                    </>
                ) 
            }
        </Div>
    );
}

export default ChattingContent;
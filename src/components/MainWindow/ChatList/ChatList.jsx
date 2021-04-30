import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import styled from 'styled-components';

import ListHeader from './ListHeader/ListHeader';
import ListItem from './ListItem/ListItem';
import SearchTab from './SearchTab/SearchTab';
import Chatting from './Chatting/Chatting';

import { updateOldChat, appendNewChat } from '../../../redux/chatDetails/chatDetailsActions';
import { updateSearchResultAction } from '../../../redux/search/searchActions'
import { updateSocket }  from '../../../redux/socket/socketActions';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
    }
`;

const ChatList = () => { 
    const { email , name } = useSelector( state => state.userDetails );
    const { isChatting, withEmail } = useSelector( state => state.chatDetails );
    const dispatch = useDispatch();

    const [ history , setHistory ] = useState([]);
    
    useEffect( () =>
     {
        console.log('here');
        const socket = io('http://localhost:4000/');
        dispatch( updateSocket({socket:socket}) );
        socket.on('connected' , () => {
            socket.emit('new-user', { email , name } );
        });
        socket.on('search-result' , data => dispatch( updateSearchResultAction({ searchResult:data }) ));
        socket.on('previousMsg' , data => {
            console.log(data);
            dispatch( updateOldChat({ oldChat: [...data.oldChat] }) );
        });
        socket.on('reciveMsg', data => {
            console.log( data );
            dispatch( appendNewChat({ newChat: data }) );
            socket.emit('get-history', { email } );
        });
        socket.on('set-history' , data => {
            console.log( data.history );
            setHistory(data.history);
        });
    } , [] );

    return (
        <Div>
            {
                !isChatting ? 
                    <>
                        <ListHeader />
                        {
                            history.map( ( item , index ) => { 
                                return <ListItem key={index} value={item} /> ;
                            })
                        } 
                        <SearchTab />
                    </>:
                    <Chatting />
            }
        </Div>
    );

} 

export default ChatList;
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import styled from 'styled-components';

import ListHeader from './ListHeader/ListHeader';
import ListItem from './ListItem/ListItem';
import SearchTab from './SearchTab/SearchTab';
import Chatting from './Chatting/Chatting';

import { updateOldChatAction, appendNewChatAction, heIsOnlineAction, heIsOfflineAction } from '../../../redux/chatDetails/chatDetailsActions';
import { updateSearchResultAction } from '../../../redux/search/searchActions'
import { updateSocket }  from '../../../redux/socket/socketActions';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
    }
`;

const ChatList = () => { 
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { isChatting } = useSelector( state => state.chatDetails );
    const dispatch = useDispatch();

    const [ history , setHistory ] = useState([]);
    
    useEffect( () =>
     {
        console.log('here');
        const socket = io('http://localhost:4000/');
        dispatch( updateSocket({socket}) );
        socket.on('connected' , () => {
            socket.emit('new-user', { email, name, _id } );
        });
        socket.on('search-result' , data => dispatch( updateSearchResultAction({ searchResult:data }) ));
        socket.on('previous-message' , data => {
            console.log(data);
            dispatch( updateOldChatAction({ oldChat: [...data.oldChat] }) );
        });
        socket.on('he-is-online', () => dispatch( heIsOnlineAction() ));
        socket.on('he-is-offline', ({ lastSeen }) => {
            console.log( 'he-is-offline' , lastSeen );
            dispatch( heIsOfflineAction({ lastSeen }) ) ;
        });
        socket.on('reciveMsg', data => {
            console.log( data );
            dispatch( appendNewChatAction({ newChat: data }) );
            socket.emit('get-history', { email } );
        });
        socket.on('set-history' , ({ history }) => {
            console.log( history );
            setHistory( history );
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
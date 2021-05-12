import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import styled from 'styled-components';

import serviceWorkerDev from '../../../serviceWorkerDev';

import Loading from '../../Loading/Loading';
import ListHeader from './ListHeader/ListHeader';
import ListItem from './ListItem/ListItem';
import SearchTab from './SearchTab/SearchTab';
import Chatting from './Chatting/Chatting';
import TapHere from './TapHere/TapHere';

import { newAboutAction } from '../../../redux/userDetails/userDetailsActions';
import { endChatAction, updateOldChatAction, heIsOnlineAction, heIsOfflineAction, toggleTypingAction } from '../../../redux/chatDetails/chatDetailsActions';
import { updateSearchResultAction } from '../../../redux/search/searchActions'
import { updateSocket }  from '../../../redux/socket/socketActions';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
        position:relative;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;

const ChatList = () => { 
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { isChatting } = useSelector( state => state.chatDetails );
    const dispatch = useDispatch();

    const [ history , setHistory ] = useState([]);
    const [ loadingHistory, setLoadingHistory  ] = useState(true);

    useEffect( () =>
    {
        const socket = io('https://archipelago-messenger-backend.herokuapp.com');
        dispatch( updateSocket({socket}) );
        socket.on('connected' , async () => {
            serviceWorkerDev();
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
        socket.on('toggle-typing', ({isTyping}) => dispatch( toggleTypingAction({ isTyping }) ));
        socket.on('updated-about', ({ newAbout }) => dispatch( newAboutAction({ newAbout }) ));
        socket.on('set-history' , ({ history }) => {
            console.log( history );
            setLoadingHistory(false);
            setHistory( history.sort( (a,b) =>  new Date(a.lastMessageTime) > new Date(b.lastMessageTime) ? -1 : 1 ) );
        });

        document.addEventListener("visibilitychange", () => {
            if( document.hidden ){
                console.log('offline');
                dispatch( endChatAction() );
                socket.emit('offline');
            } else{
                console.log('online');
                socket.emit('online',{ email, name, _id });
            } 
        }, false);
    } , [] );

    return (
        <Div>
            <ListHeader />
            { 
                loadingHistory ? 
                <Loading side={80} /> : 
                history.map( (item,index) => <ListItem key={index} value={item} /> ) 
            } 
            <SearchTab />
            <TapHere />
            { isChatting && <Chatting /> }
        </Div>
    );

} 

export default ChatList;
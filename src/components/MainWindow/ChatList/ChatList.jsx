import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import styled from 'styled-components';

import ListHeader from './ListHeader/ListHeader';
import ListItem from './ListItem/ListItem';
import SearchTab from './SearchTab/SearchTab';
import Chatting from './Chatting/Chatting';
import TapHere from './TapHere/TapHere';

import { newAboutAction } from '../../../redux/userDetails/userDetailsActions';
import { updateOldChatAction, heIsOnlineAction, heIsOfflineAction, toggleTypingAction } from '../../../redux/chatDetails/chatDetailsActions';
import { updateSearchResultAction } from '../../../redux/search/searchActions'
import { updateSocket }  from '../../../redux/socket/socketActions';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
        position:relative;
    }
`;

const ChatList = () => { 
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { isChatting } = useSelector( state => state.chatDetails );
    const dispatch = useDispatch();

    const [ history , setHistory ] = useState([]);
    // const notifyMe = ( data ) => {
    //     if(Notification.permission==='granted'){
    //         notify(data);
    //     } else {
    //         Notification.requestPermission( permission => {
    //             if( permission === 'granted'){
    //                 notify(data);
    //             }
    //         });
    //     }
    // }
    // const notify = ({ notifyEmail, notifyName, notifyMessage }) => {
    //     const notification = new Notification(`You have a message from ${notifyEmail}`, {
    //         body:`${notifyName} : ${notifyMessage}`
    //     });
    //     notification.onclick = () => {
    //         console.log('clicked notification');
    //     }
    //     setTimeout( notification.close.bind(notification), 3000 );
    // }

    // const showNotification = ({ notifyEmail, notifyName, notifyMessage }) => {
    //     console.log('inside show notification');
    //     Notification.requestPermission( permission => {
    //         if (permission === 'granted') {
    //             console.log('granted');
    //             navigator.serviceWorker.ready.
    //             then( registration => registration.showNotification(`You have a message from ${notifyEmail}`, { 
    //                 body:`${notifyName} : ${notifyMessage}` 
    //             }) ).
    //             catch(err => console.log(err) );
    //         } else {
    //             console.log('not granted')
    //         }
    //     });
    // }

    useEffect( () =>
    {
        const socket = io('https://archipelago-messenger-backend.herokuapp.com/');
        dispatch( updateSocket({socket}) );
        socket.on('connected' , async () => {
            // const sw = await navigator.serviceWorker.ready ;
            // const subscription = await sw.pushManager.subscribe({
            //     userVisibleOnly: true,
            //     applicationServerKey: 'BPTusE7P8UdeFusBo-HAkYSKag0S5cNa1xjGfwmho0mlmSx_ZFj0aoHGKouP0ONYWxAK8cfeYhe5wsQucSPbO9U'
            // });
            // console.log( JSON.stringify(subscription) )
            // socket.emit('new-user', { email, name, _id, subscription:JSON.stringify(subscription) } );
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
            setHistory( history );
        });
        // socket.on('push-notification', data => showNotification(data) );
    } , [] );

    return (
        <Div>
            <ListHeader />
            {
                history.map( ( item , index ) => { 
                    return <ListItem key={index} value={item} /> ;
                })
            } 
            <SearchTab />
            {
                isChatting && <Chatting />
            }
            <TapHere />
        </Div>
    );

} 

export default ChatList;
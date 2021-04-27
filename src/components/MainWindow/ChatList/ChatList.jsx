import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
// import { useSelector } from "react-redux";
import styled from 'styled-components';

import ListHeader from './ListHeader/ListHeader';
import ListItem from './ListItem/ListItem';
import SearchTab from './SearchTab/SearchTab';
import Chatting from './Chatting/Chatting';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
    }
`;

const ChatList = ({ userData }) => { 
    // const isLoged = useSelector( state => state.isloged );
    const [ currentSocket, setCurrentSocket ] = useState(null);
    const [ searchResult , setSearchResult ] = useState([]);
    const [ allChat , setAllChat ] = useState({});
    // const [ history , setHistory ] = useState([]);
    const [ chatting , setChatting ] = useState({
        isChatting: false ,
        with : undefined
    });
    
    useEffect( () => {
        console.log('here');
        const socket = io('http://localhost:4000/');
        setCurrentSocket(socket);
        socket.on('connected' , () => {
            socket.emit('newUser', userData );
        });
        socket.on('searchResult' , data => setSearchResult(data) );
        socket.on('invite', function(data) {
            console.log( data );
            socket.emit("joinRoom",data)
        });
        socket.on('previousMsg' , data => {
            console.log(data);
            setAllChat(data);
        });
        socket.on('reciveMsg', data => {
            console.log( data );
            socket.emit('getHistory', userData );
        });
        socket.on('setHistory' , data => {
            // setHistory(data.history);
            console.log( data.history );
        });
    } , [ userData ] );

    return (
        <Div>
            {
                !chatting.isChatting ? 
                    <>
                        <ListHeader />
                        {
                            [ 'a' , 'b' , '' ].map( (v,i) =>  <ListItem key={i} name={v} /> )
                        } 
                        <SearchTab socket={ currentSocket } searchResult={searchResult} setChatting={setChatting} />
                    </>:
                    <Chatting setChatting={setChatting} userData={ userData } with={ chatting.with } socket={ currentSocket } allChat={allChat} />
            }
        </Div>
    );

} 

export default ChatList;
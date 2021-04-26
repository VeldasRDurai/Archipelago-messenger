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
    const [currentSocket, setCurrentSocket] = useState(null);
    const [ searchResult , setSearchResult ] = useState([]);
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
            socket.emit("joinRoom",data)
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
                    <Chatting userData={ userData } with={ chatting.with } socket={ currentSocket } />
            }
        </Div>
    );

} 

export default ChatList;
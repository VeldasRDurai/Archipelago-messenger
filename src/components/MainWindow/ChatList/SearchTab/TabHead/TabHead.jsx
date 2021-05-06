import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { updateSearchTextAction } from '../../../../../redux/search/searchActions';

const Div = styled.div`
    @media (max-width:425px) {
        overflow:hidden;
        height:10%;
        box-sizing:border-box;
        padding:0 18px;
        font-size:18px;
        background-color:#075e55;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
        #search {
            width:80%;
            font-family: 'Merienda One', cursive;
            color:white;
            background-color:#0000; //transperant
            border:none;
            margin-left:8px;
            font-size:15px;
            outline:none;
            ::placeholder{
                color:white;
            }
        }
    }
`;

const TabHead = ({ setTabOpened }) => {
    const { _id } = useSelector( state => state.userDetails );
    const { socket } = useSelector( state => state.socket );
    const { searchText } = useSelector( state => state.search );
    const dispatch = useDispatch();

    
    useEffect( () => {
        if(searchText){
            socket.emit( 'search' , { searchText, _id } );
            console.log('search tab');
        }        
    } , [ searchText ] );

    return(
        <Div>
            <svg id='back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                onClick={() => setTabOpened(false)} >
                <path xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            </svg>
            <input id='search' type='text' placeholder='Search here' spellCheck={false} autoComplete={false||'off'}
                onChange={ e => dispatch( updateSearchTextAction({ searchText: e.target.value }) ) } />
        </Div>
    );
}

export default TabHead; 
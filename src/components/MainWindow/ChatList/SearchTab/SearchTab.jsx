import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import TabHead from './TabHead/TabHead';
import TabContent from './TabContent/TabContent';

import { startChatAction } from '../../../../redux/chatDetails/chatDetailsActions' ;
import { updateSearchTextAction } from '../../../../redux/search/searchActions';

const Key = styled.div`
    @media (max-width:425px) {
        position:absolute;
        bottom:30px;
        right :20px;
        height:40px;
        width :40px;
        background-color:green;
        color:white;
        border-radius:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:40px;
    }
`;
const Tab = styled.div`
    @media (max-width:425px) {
        height:100vh;
        width:100vw;
        position:absolute;
        top:0;
        left:0;
        background-color:whitesmoke;
    }
`;

const SearchTab = () => {
    const { socket } = useSelector( state => state.socket );
    const { searchResult , searchText } = useSelector( state => state.search );
    const dispatch = useDispatch();
    
    const [ tabOpened , setTabOpened ] = useState(false);
    
    useEffect( () => {
        if(searchText){
            socket.emit( 'search' , { searchText } );
            console.log('search tab');
        }        
    } , [ searchText , socket ] );
    return(
        <>
            {
                tabOpened ?
                <Tab>
                    <TabHead />
                    <TabContent />
                    <div onClick={ () => setTabOpened(false) } > back </div>
                    <input type="text" name="search" id="search" 
                        onChange={ e => dispatch( updateSearchTextAction({ searchText: e.target.value }) ) } />
                    {
                        searchText!=='' && <div> Showing search result for { searchText } </div>
                    } 
                    {
                        searchResult.map( (v,i) => {
                            return <div 
                                onClick={ () => dispatch( startChatAction({ withEmail:v.email }) )}
                                key={i} >
                                        {v.email} 
                                    </div> ;
                        })
                    }
                </Tab>: 
                <Key onClick={ () => setTabOpened(true) } >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z">
                        </path>
                    </svg>
                </Key>
            }
        </>
    );
}

export default SearchTab;
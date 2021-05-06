import React, { useState } from 'react';
import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';

import TabHead from './TabHead/TabHead';
import TabContent from './TabContent/TabContent';

const Key = styled.div`
    @media (max-width:425px) {
        position:absolute;
        bottom:30px;
        right :20px;
        height:40px;
        width :40px;
        background-color:#075e55;
        color:white;
        border-radius:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:40px;
        z-index:8;
    }
`;
const Tab = styled.div`
    @media (max-width:425px) {
        background-color:whitesmoke;
        overflow:hidden;
        height:100vh;
        width:100vw;
        position:absolute;
        z-index:8;
        animation: tabOut 0.2s linear alternate both;

        @keyframes tabOut {
            from {left:100vw;top:100vh;}
            to {left:0;top:0;}
        }
    }
`;

const SearchTab = () => {
    // const { socket } = useSelector( state => state.socket );
    // const { searchResult , searchText } = useSelector( state => state.search );
    // const dispatch = useDispatch();
    
    const [ tabOpened , setTabOpened ] = useState(false);
    
    return(
        <>
            {
                tabOpened ?
                <Tab>
                    <TabHead setTabOpened={setTabOpened} />
                    <TabContent />
                </Tab>: 
                <Key onClick={ () => setTabOpened(true) } >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"/>
                    </svg>
                </Key>
            }
        </>
    );
}

export default SearchTab;
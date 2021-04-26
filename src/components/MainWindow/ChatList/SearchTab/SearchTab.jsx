import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// import TabHead from './TabHead/TabHead';
// import TabContent from './TabContent/TabContent';

const Key = styled.div`
    @media (max-width:425px) {
        position:absolute;
        bottom:10px;
        right:10px;
        height:50px;
        width:50px;
        background-color:green;
        color:white;
        border-radius:25px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:50px;
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

const SearchTab = ({ socket , searchResult , setChatting }) => {

    const [ tabOpened , setTabOpened ] = useState(false);
    const [ searchText , setSearchText ] = useState('');

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
                    {/* <TabHead />
                    <TabContent /> */}
                    <div onClick={ () => setTabOpened(false) } > back </div>
                    <input type="text" name="search" id="search" onChange={ e => setSearchText(e.target.value) } />
                    {
                        searchText!=='' && <div> Showing search result for { searchText } </div>
                    } 
                    {
                        searchResult.map( (v,i) => {
                            return <div onClick={ () => setChatting({ isChatting:true, with:v.email }) } key={i} >
                                        {v.email} 
                                    </div> ;
                        })
                    }
                </Tab>: 
                <Key onClick={ () => setTabOpened(true) } >
                    +
                </Key>
            }
        </>
    );
}

export default SearchTab;
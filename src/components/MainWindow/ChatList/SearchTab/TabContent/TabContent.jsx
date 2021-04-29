import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TabContentItem from './TabContentItem/TabContentItem';

const Div = styled.div`
    @media (max-width:425px) {
        height:90%;
        background-color:white;
        overflow:scroll;
    }
`;

const TabContent = () => {
    const { email  } = useSelector( state => state.userDetails );
    const { searchResult } = useSelector( state => state.search );
    return(
        <Div>
            {/* {
                searchText!=='' && <div> Showing search result for { searchText } </div>
            }  */}
            {
                searchResult.filter( item => item.email !== email )
                    .map( (item,index) => {
                        return <TabContentItem key={index} value={item} /> ;
                })
            }
        </Div>
    );
}

export default TabContent; 
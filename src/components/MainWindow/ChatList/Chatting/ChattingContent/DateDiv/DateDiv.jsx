import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    align-self:center;
    margin:10px;
    background-color:#e1f3fb;
    color:black;
    box-shadow:2px 2px 4px grey;
    border-radius:7px;
    padding:4px;
    font-size:12px;
`;
const DateDiv = ({ date }) => {
    
    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

    const datesAreConsecutive = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        Math.abs( first.getDate() - second.getDate() ) === 1 ;
        
    return ( 
        <Div>
            {
                datesAreOnSameDay( new Date(), new Date(date) ) ? 'Today':
                    datesAreConsecutive( new Date(), new Date(date) ) ? 'Yesterday':
                        new Date(date).toLocaleDateString( undefined,{ year: 'numeric', month: 'long', day: 'numeric'} ) 
            }
        </Div>
    );
}

export default DateDiv;
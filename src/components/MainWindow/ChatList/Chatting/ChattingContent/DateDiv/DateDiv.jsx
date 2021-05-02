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
    return ( 
        <Div>
            { new Date(date).toLocaleDateString('pt-PT') }
        </Div>
    );
}

export default DateDiv;
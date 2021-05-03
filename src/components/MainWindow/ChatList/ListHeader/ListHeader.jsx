import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    @media (max-width:425px) {
        box-sizing:border-box;
        height:80px;
        width:100%;
        padding:0 8%;
        font-family: 'Merienda One', cursive;
        font-size:18px;
        background-color:#107050;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
    }
`;

const ListHeader = () => {
    return(
        <Div>
            <div id='heading'> Archipelago </div>
        </Div>
    );
}

export default ListHeader;
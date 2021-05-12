import React, { useState } from 'react';
import styled from 'styled-components'

import Options from './Options/Options';

const Div = styled.div`
    @media (max-width:425px) {
        box-sizing:border-box;
        height:15%;
        width:100%;
        padding:0 5% 0 10%;
        font-size:18px;
        background-color:#075e55;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
        #heading{
            font-family: 'Merienda One', cursive;
        }
        #dots{
            margin-left:auto; 
        }
    }
`;

const ListHeader = () => {
    
    const [showOptions, setShowOptions] = useState(false);

    return(
        <Div>
            <div id='heading'> Archipelago </div>
            <svg onClick={ () => setShowOptions(true) } id='dots' height='24' width='24' >
                <g xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="#FFFFFF" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </g>
            </svg>
            {
                showOptions && <Options setShowOptions={ setShowOptions } />
            }
        </Div>
    );
}

export default ListHeader;
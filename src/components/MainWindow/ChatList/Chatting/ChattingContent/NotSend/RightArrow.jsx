import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    position:absolute;
    top:0px;
    right:-8px;
    color:#dcf8c6;
`;

const RightArrow = () => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
            <path opacity=".13" fill="currectColor" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
            <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
        </Svg>
    );
}

export default RightArrow;
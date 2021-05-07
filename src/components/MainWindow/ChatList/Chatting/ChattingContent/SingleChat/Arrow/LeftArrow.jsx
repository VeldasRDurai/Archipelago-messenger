import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    position:absolute;
    top:0px;
    left:-8px;
    color: ${ ({showChatInfo}) => showChatInfo? '#075e54' : 'white' };
`;

const LeftArrow = ({showChatInfo}) => {
    return(
        <Svg showChatInfo={showChatInfo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
            <path opacity=".13" fill="currectColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
            <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
        </Svg>
    );
}

export default LeftArrow;
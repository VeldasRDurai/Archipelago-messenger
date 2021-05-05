import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    color: #075e55;
`;


export default function Email() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">            
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/>
        </Svg>
    );
}
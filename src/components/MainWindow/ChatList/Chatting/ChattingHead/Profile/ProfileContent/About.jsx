import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    color: white;   
    background: #075e55;
    border-radius: 12px;
`;


export default function About() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">            
            {/* <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M11 7h2v7h-2z"/> */}
            <path xmlns="http://www.w3.org/2000/svg" d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
        </Svg>
    );
}


import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
  position: relative;
  width: ${ ({side}) => side+'px' };
  height:${ ({side}) => side+'px' };
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${ ({side}) => (side-side/5) +'px' };
        height:${ ({side}) => (side-side/5) +'px' };
        margin: ${ ({side}) => (side/10) +'px' };
        border: ${ ({side}) => (side/10) +'px' } solid #075e55;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #075e55 transparent transparent transparent;
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Loading = ({ side }) => {
    return (
        <Div side={side} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Div>
    );
} 

export default Loading;
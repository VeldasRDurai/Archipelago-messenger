import React, { useState } from 'react';
import styled from 'styled-components';

import NormalScreen from './NormalScreen';
import FullScreen from './FullScreen';

const Div = styled.div`
    @media (max-width:425px) {
        position:absolute;
        height:20px;
        width :20px;
        top:0;
        right:0;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:40px;
        z-index:10;
    }
`;

const TapHere = () => {
    const [ normalScreen , setNormalScreen ] = useState(true);
    const clicked = () => {
        normalScreen ?
            document.documentElement.requestFullscreen().catch(e => {console.log(e);}) :
            document.exitFullscreen().catch(e => {console.log(e);});
        setNormalScreen( item => !item );
    }
    return (
        <Div onClick={ clicked } >
            {
                normalScreen ? <FullScreen /> : <NormalScreen />
            }
        </Div>
    )
}

export default TapHere;
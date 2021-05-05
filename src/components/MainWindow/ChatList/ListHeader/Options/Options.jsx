import React, { useState } from 'react';
import styled from 'styled-components';

import Profile from './Profile/Profile';

const Div = styled.div`
    /* background-color:#8a2be299; */
    color:black;
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:11;
`;
const Box = styled.div`
    position:absolute;
    background-color:white;
    box-shadow: 1px 1px 10px 0px #000;
    border-radius:2px;
    font-family: 'Orelega One', cursive ;
    top:30px;
    right:30px;
    animation: example 0.2s linear alternate both;
    overflow:hidden;

    @keyframes example {
        from {height:0;width:0;}
        to {height:60px;width:40%;}
    } 
    & > div { 
        height:30px;
        display:flex; 
        align-items:center; 
        div {
            padding-left:10px; 
        } 
    }
`;

const Options = ({ setShowOptions }) => {

    const [ showProfile, setShowProfile ] = useState(false);

    return (
        <Div onClick={ () => setShowOptions(false)} >
            <Box>
                <div onClick={ (e) => {setShowProfile(true);e.stopPropagation();console.log('clicked');} } >
                    <div> Profile </div>
                </div>
                <div><div> Log out </div></div>
            </Box>
            { showProfile && <Profile setShowProfile={setShowProfile} setShowOptions={setShowOptions} /> }
        </Div>
    );
}

export default Options;
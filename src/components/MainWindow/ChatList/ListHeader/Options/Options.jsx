import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import serviceWorkerUnsubscribe from '../../../../../serviceWorkerUnsubscribe';

import { logedOutAction } from '../../../../../redux/userDetails/userDetailsActions';
import { updateSocket } from '../../../../../redux/socket/socketActions';

import Profile from './Profile/Profile';

const Div = styled.div`
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
    top:30px;
    right:30px;
    animation: example 0.1s linear alternate both;
    font-family: 'Balsamiq Sans';
    overflow:hidden;

    @keyframes example {
        from {height:0;width:0;}
        to {height:90px;width:180px;}
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
    const history = useHistory();
    const { socket } = useSelector( state => state.socket );
    const dispatch = useDispatch();

    const [ showProfile, setShowProfile ] = useState(false);

    const logOut = async () => {
        try{
            serviceWorkerUnsubscribe();
            const data = await fetch( "https://archipelago-messenger-backend.herokuapp.com/log-out" , { credentials: 'include' });
            if( data.status === 200 ) {
                dispatch( logedOutAction() );
                socket.disconnect();
                dispatch( updateSocket({ socket:null }) );
                history.push('/sign-in');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Div onClick={ () => setShowOptions(false)} >
            <Box>
                <div onClick={ (e) => {setShowProfile(true);e.stopPropagation();console.log('clicked');} } >
                    <div> Profile </div>
                </div>
                <div onClick={ () => window.open('https://github.com/VeldasRDurai/Archipelago-messenger/issues', '_blank') } > <div> Report Bug </div> </div>
                {/* <div> <div> Buy me a coffee </div> </div> */}
                <div onClick={ logOut } ><div> Log out </div></div>
            </Box>
            { showProfile && <Profile setShowProfile={setShowProfile} setShowOptions={setShowOptions} /> }
        </Div>
    );
}

export default Options;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Name from './Name';
import About from './About';
import Email from './Email';
import ProfileTile from './ProfileTile/ProfileTile';
// imported not from subfolder**
import ProfilePicture from '../../../../ListItem/ProfilePicture/ProfilePicture';

const Div = styled.div`
    @media (max-width:425px) {
        display:flex;
        flex-direction:column;
        justify-content:center;
        overflow:scroll;
        padding: 40px 0;
        #profile-pic{
            align-self:center;
            margin:0 0 40px 0;
            height:150px;
            width:150px;
            border-radius:75px;
            background-color:#075e55;
            box-shadow: 0 0 5px 0px #666;
        }        
    }
`;

const ProfileContent = () => {
    const { chattingWithPicture, chattingWithEmail, chattingWithName, chattingWithAbout} = useSelector( state => state.chatDetails );
    const [ showDp, setShowDp ] = useState(false);
    const [ clickEvent, setClickEvent ] = useState({});

    return (
        <Div>
            <img id='profile-pic' src={ chattingWithPicture } alt="profile-Pic"
                onClick={ e => { setShowDp(true); e.stopPropagation();setClickEvent(e); } } />
            <ProfileTile heading={'Name'}  value={ chattingWithName  } Logo={Name} />
            <ProfileTile heading={'About'} value={ chattingWithAbout } Logo={About} />
            <ProfileTile heading={'Email'} value={ chattingWithEmail } Logo={Email} />
            { showDp && <ProfilePicture setShowDp={setShowDp} picture={chattingWithPicture} clickEvent={clickEvent} /> }
        </Div>
    )
}

export default ProfileContent;
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Name from './Name';
import About from './About';
import Email from './Email';
import ProfileTile from './ProfileTile/ProfileTile';

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
        }        
    }
`;

const ProfileContent = () => {
    const { chattingWithPicture, chattingWithEmail, chattingWithName} = useSelector( state => state.chatDetails );
    
    return (
        <Div>
            <img id='profile-pic' src={ chattingWithPicture } alt="profile-Pic"/>
            <ProfileTile heading={'Name'} value={ chattingWithName } Logo={Name} />
            <ProfileTile heading={'About'} value={"Hey there I'm using archipelago"} Logo={About} />
            <ProfileTile heading={'Email'} value={ chattingWithEmail } Logo={Email} />
        </Div>
    )
}

export default ProfileContent;
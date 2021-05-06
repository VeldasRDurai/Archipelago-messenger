import React from 'react';
import styled from 'styled-components';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileContent from './ProfileContent/ProfileContent';

const Div = styled.div`
    position:absolute;
    z-index:12;
    height:100vh;
    width:100vW;
    top:0;
    background-color:white;
    animation: profileOut 0.2s linear alternate both;

    @keyframes profileOut {
        from {left:300px;}
        to {left:0px}
    }
`;

const Profile = ({ setShowOptions, setShowProfile }) => {
    return (
        <Div onClick={ e => e.stopPropagation() } >
            <ProfileHeader setShowProfile={setShowProfile} setShowOptions={setShowOptions} />
            <ProfileContent />
        </Div>
    )
}
export default Profile;
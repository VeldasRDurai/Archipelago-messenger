import React from 'react';
import styled from 'styled-components';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileContent from './ProfileContent/ProfileContent';

const Div = styled.div`
    position:absolute;
    top:0;
    z-index:12;
    height:100vh;
    width:100vw;
    background-color:white;
    animation: profileOut 0.2s linear alternate both;

    @keyframes profileOut {
        from {left:100vw;}
        to {left:0;}
    }
`;

const Profile = ({ setShowProfile }) => {
    return (
        <Div>
            <ProfileHeader setShowProfile={setShowProfile} />
            <ProfileContent />
        </Div>
    )
}
export default Profile;
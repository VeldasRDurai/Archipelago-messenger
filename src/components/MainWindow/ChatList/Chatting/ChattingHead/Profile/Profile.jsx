import React from 'react';
import styled from 'styled-components';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileContent from './ProfileContent/ProfileContent';

const Div = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:12;
    height:100%;
    width:100%;
    background-color:white;
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
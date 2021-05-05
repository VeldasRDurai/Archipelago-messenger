import React from 'react';
import styled from 'styled-components';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileContent from './ProfileContent/ProfileContent';

const Div = styled.div`
    position:absolute;
    z-index:12;
    height:100%;
    width:100%;
    background-color:white;
`;

const Profile = ({ setShowOptions, setShowProfile }) => {
    return (
        <Div>
            <ProfileHeader setShowProfile={setShowProfile} setShowOptions={setShowOptions} />
            <ProfileContent />
        </Div>
    )
}
export default Profile;
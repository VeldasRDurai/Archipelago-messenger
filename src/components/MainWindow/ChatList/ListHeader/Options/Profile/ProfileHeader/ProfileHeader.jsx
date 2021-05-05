import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    @media (max-width:425px) {
        overflow:hidden;
        height:10%;
        box-sizing:border-box;
        padding:0 18px;
        font-size:18px;
        background-color:#075e55;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
        #profile{
            font-family: 'Merienda One', cursive;
            margin-left: 18px;
        }
    }
`;

const ProfileHeader = ({ setShowOptions, setShowProfile }) => {
    return (
        <Div>
            <svg id='back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                onClick={() => { { setShowProfile(false);setShowOptions(false) } }} >
                <path xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            </svg>
            <div id="profile"> Profile </div>
        </Div>
    )
}

export default ProfileHeader;
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
        #download{
            margin-left:auto;
        }
    }
`;

const ProfileHeader = ({ setShowProfile }) => {
    const { _id, name } = useSelector( state => state.userDetails );
    const { chattingWithId, chattingWithName } = useSelector( state => state.chatDetails );
    return (
        <Div>
            <svg id='back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                onClick={() => setShowProfile(false) } >
                <path xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            </svg>
            <div id="profile"> Profile </div>
            <svg id='download' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                onClick={ () => window.open(`http://localhost:4000/download-history/${chattingWithName}/${name}/${chattingWithId}/${_id}`, '_blank')  } >
                <path xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    d="M4 4v2.01C5.83 3.58 8.73 2 12.01 2 17.53 2 22 6.48 22 12s-4.47 10-9.99 10C6.48 22 2 17.52 2 12h2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C9.04 4 6.47 5.61 5.09 8H8v2H2V4h2zm9 8V6h-2v7l4.97 3.49 1.26-1.55L13 12z" 
                    clip-rule="evenodd" 
                    fill-rule="evenodd"/>
            </svg>
        </Div>
    )
}

export default ProfileHeader;
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background-color:#000;
    z-index:9;
    display:flex;
    justify-content:center;
    align-items:center;    
    animation: profilePictureOut 0.4s ease-in-out alternate both;

    @keyframes profilePictureOut {
        from {
            height:0;width:0;
            top :${ ({clientY}) => `${clientY}px` };
            left:${ ({clientX}) => `${clientX}px` };
        }
        to {top:0;left:0;height:100vh;width:100vw;}
    }
`;
const Img = styled.img`
    height: 90vw;
    width : 90vw;
    animation: profilePictureImageOut 0.1s linear 0.3s alternate both;

    @keyframes profilePictureImageOut {
        from {height:0;width:0; }
        to {height:90vw;width:90vw;}
    }
`;

const ProfilePicture = ({ picture, setShowDp, clickEvent }) => {
    console.log(clickEvent);
    return (
        <Div clientX={clickEvent.clientX} clientY={clickEvent.clientY} onClick={ e => { setShowDp(false);e.stopPropagation() } } >
            <Img src={picture} alt={'Profile picture'} />
        </Div>
    );
}

export default ProfilePicture;
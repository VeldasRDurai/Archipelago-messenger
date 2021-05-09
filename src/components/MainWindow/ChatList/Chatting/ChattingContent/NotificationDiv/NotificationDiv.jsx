import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    align-self:center;
    margin:10px;
    height:auto; 
    width:auto;
    background-color :#fef4c5;
    color:black;
    box-shadow:2px 2px 4px grey;
    border-radius:7px;
    padding:4px;
    font-size:11px;
    text-align:center;
`;

const NotificationDiv = () => {
    return (
        <Div>
            <svg id='back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" >
                <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
            For the security and proper functioning of this application and your device's well-being, we are intended to show you only the last 1000 messages. If you want to get your previous chat history feel free to download it from this profile section. For better visual experience while reading the chat use our
            <a href="https://veldasrdurai.github.io/whatsapp-exported-message-viewer/"> Exported Message Viewer </a> 
        </Div>
    );
}

export default NotificationDiv;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import LogoSignIn from './LogoSignIn';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
        box-sizing:border-box;
        background-color:#23595c;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        & > * { margin-top:10px; }
        #heading{
            font-size:20px;
            color:white;
            font-family:'Merienda One', cursive;
            /* font-family: 'Orelega One', cursive ; */
            /* font-family: 'Caveat', cursive; */
            /* font-family: 'Jomhuria', cursive; */
            /* font-family: 'Varela', sans-serif; */
            /* font-family: 'Chilanka', cursive; */
        }
        #version, #copyright {
            font-size:12px;
            color:#fff8;
            font-family: 'Varela', sans-serif;
        }
    }
`;

const SignIn = () => {
    const history = useHistory();
    
    useEffect( () => {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/platform.js";
        script.onload = () => renderButton();
        document.body.appendChild(script);
    });
    
    async function onSuccess(googleUser) {
        var id_token = await googleUser.getAuthResponse().id_token;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://archipelago-messenger-backend.herokuapp.com/sign-in');
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            console.log('Signed in as: ' + xhr.responseText);
            if( xhr.responseText === 'success'){
                signOut();
                history.push('/');
            }
        };
        xhr.send(JSON.stringify({token : id_token}));
    }
    function signOut() {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
    function onFailure(error) {
        console.log(error);
    }
    function renderButton() {
        window.gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 200,
            'height': 40,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }
    return (
        <Div>
            <div id='heading'> Archipelago Messenger </div>
            <div id="version"> Version: 1.00.00 </div>
            <LogoSignIn />
            <div id="copyright"> © 2021 VeldasRDurai Inc. </div>
            <div id="my-signin2"></div>
        </Div>
    );
}

export default SignIn;

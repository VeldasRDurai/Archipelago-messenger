import React from 'react';
// import { Redirect } from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    & > * {
        margin-top:10px;
    }
`;

const LogIn = () => {
    return(
        <Div>
            <div> THIS IS LOG IN PAGE</div>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="button" value="log in"/>
            <hr/>
            <div> new user ? </div>
            <input type="button" value="sign up" 
                onClick={ () => window.location.href = "http://localhost:3000/sign-up" }/>
        </Div>
    );
}

export default LogIn;
import React, { useEffect, useState } from 'react';
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

const SignUp = () => {

    
    const [ email , setEmail ] = useState('');
    const [ name , setName ] = useState('');
    const [ password , setPassword ] = useState('');
    
    const signUpSubmit = () => {
        console.log( email , name , password );
    }

    useEffect( () => {
        console.log('here');
    } , [ email ] );
    
    return (
        <Div>
            <div> THIS IS SIGN UP PAGE</div>
            <input type="email" placeholder="email" onChange={ e => setEmail(e.target.value) } />
            <input type="text" placeholder="username" onChange={ e => setName(e.target.value) } />
            <input type="password" placeholder="password" onChange={ e => setPassword(e.target.value) } />
            <input type="button" value="Sign Up" onClick = { signUpSubmit } />
            <hr/>
            <div> Already have an account ? </div>
            <input type="button" value="Log In"
                onClick={ () => window.location.href = "http://localhost:3000/log-in" }/>
        </Div>
    );
}

export default SignUp;
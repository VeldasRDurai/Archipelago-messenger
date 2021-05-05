import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
    @media (max-width:425px) {
        height:100%;
        width:100%;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        & > * {
            margin-top:10px;
        }
    }
`;

const SignUp = () => {
    
    const history = useHistory();
    
    const [ email , setEmail ] = useState('');
    const [ name , setName ] = useState('');
    const [ password , setPassword ] = useState('');
    
    const signUpSubmit = async () => {
        try{
            console.log( email , name , password );
            const data = await fetch( "http://localhost:4000/sign-up" , {
                credentials: 'include' , 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify( { email , name , password } ),
            });
            console.log('Success:', data);
            if( data.status === 200 ) {
                history.push('/');
            }
        }
        catch(error) {
            console.error('Error:'+ error);
            console.log(error.data);
        }
    }
    
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
                onClick={ () => history.push('/log-in') }/>
        </Div>
    );
}

export default SignUp;
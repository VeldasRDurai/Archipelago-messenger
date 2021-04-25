import React, { useState } from 'react';
import { useHistory } from 'react-router';
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
    const history = useHistory();
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    
    const logInSubmit = async () => {
        console.log( email , password );
        try{
            console.log( email , password );
            const data = await fetch( "http://localhost:4000/log-in" , {
                credentials: 'include' , 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify( { email , password } ),
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
    
    return(
        <Div>
            <div> THIS IS LOG IN PAGE</div>
            <input type="email" placeholder="email" onChange={ e => setEmail(e.target.value) } />
            <input type="password" placeholder="password" onChange={ e => setPassword(e.target.value) } />
            <input type="button" value="log in" onClick = { logInSubmit } />
            <hr/>
            <div> new user ? </div>
            <input type="button" value="sign up" 
                // onClick={ () => window.location.href = "http://localhost:3000/sign-up" }/>
                onClick={ () => history.push('/sign-up') }/>
        </Div>
    );
}

export default LogIn;
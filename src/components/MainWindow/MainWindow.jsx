import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

import { logedInAction } from '../../redux/isLoged/isLogedActions';

import Loading from '../Loading/Loading';

const Div = styled.div`
    @media (max-width:425px) {
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;
const MainWindow = () => {
    const [ loading , setLoading ] = useState(true);
    const dispatch = useDispatch();
    const isLoged = useSelector( state => state.isloged );

    useEffect( () => { 
        const dataFetcher = async () => {
            try {
                const res = await fetch( "http://localhost:4000/" , {
                    credentials: 'include'
                });
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json'},
                //     body: JSON.stringify( { purpose : 'isValidUser'} ),
                // });
                if( res.status === 200 ){
                    let data = res.json();
                    console.log(data);
                } else {
                    console.log(res);
                }
                setLoading(false);
                dispatch( logedInAction() );
            } catch(e) {
                console.log(e);
            }
        }
        dataFetcher();
    } , [ dispatch ] );

    return(
        <Div>
            {
                loading ? <Loading /> : 
                isLoged ? <div> You are loged in </div> :
                          <div> <Redirect to='/log-in' /> </div>
            }
        </Div>
    );
}

export default MainWindow;
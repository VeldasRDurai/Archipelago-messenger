import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

import { logedOutAction } from '../../redux/isLoged/isLogedActions';

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
        setTimeout( () => {
            setLoading(false);
            // dispatch( logedInAction() );
            dispatch( logedOutAction() );
        }, 1000);
    } , [dispatch] );

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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { logedInAction } from '../../redux/isLoged/isLogedActions';

import Loading from '../Loading/Loading';

const Div = styled.div`
    @media (max-width:425px) {
        height:100vh;
        width :100vw;
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
            dispatch( logedInAction() );
        }, 1000);
    } , [dispatch] );

    return(
        <Div>
            {
                loading ? <Loading /> : 
                isLoged ? <div> You are loged in </div> :
                          <div> Redirected to login page </div>
            }
        </Div>
    );
}

export default MainWindow;
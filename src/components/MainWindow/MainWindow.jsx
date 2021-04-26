import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logedInAction } from '../../redux/isLoged/isLogedActions';

import Loading from '../Loading/Loading';
import ChatList from './ChatList/ChatList';

const MainWindow = () => {
    const [ userData , setUserData ] = useState('');
    const [ loading , setLoading ] = useState(true);
    const dispatch = useDispatch();
    const isLoged = useSelector( state => state.isloged );
    const history = useHistory();

    useEffect( () => { 
        const dataFetcher = async () => {
            try {
                const res = await fetch( "http://localhost:4000/" , { credentials: 'include' });
                if( res.status === 200 ){
                    let data = await res.json();
                    console.log(data);
                    setUserData(data);
                    dispatch( logedInAction() );
                } else {
                    console.log(res);
                    // console.log(res.response);
                    history.push('/log-in');
                }
                setLoading(false);
            } catch(e) {
                console.log(e);
            }
        }
        dataFetcher();
    } , [ dispatch , history ] );

    return(
        <>
            {
                loading ? <Loading /> : 
                isLoged ? <ChatList userData={userData} /> : null
            }
        </>
    );
}

export default MainWindow;
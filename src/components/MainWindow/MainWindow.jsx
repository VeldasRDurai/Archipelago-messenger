import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logedInAction } from '../../redux/userDetails/userDetailsActions';

import Loading from '../Loading/Loading';
import ChatList from './ChatList/ChatList';

const MainWindow = () => {
    const { isloged } = useSelector( state => state.userDetails );
    const dispatch = useDispatch();
    const history = useHistory();

    const [ loading , setLoading ] = useState(true);

    useEffect( () => { 
        const dataFetcher = async () => {
            try {
                const res = await fetch( "http://localhost:4000/" , { credentials: 'include' });
                if( res.status === 200 ){
                    let { email, name, _id, picture } = await res.json();
                    console.log( 'email : ', email, ' name : ', name, '_id : ' , _id, 'picture',picture );
                    dispatch( logedInAction({ email, name, _id, picture }) );
                } else {
                    console.log(res);
                    history.push('/sign-in');
                }
                setLoading(false);
            } catch(e) { console.log(e); }
        }
        dataFetcher();
    } , [] );

    return(
        <>
            {
                loading ? <Loading  /> : 
                isloged ? <ChatList /> : 
                    <div> error  </div>
            }
        </>
    );
}

export default MainWindow;
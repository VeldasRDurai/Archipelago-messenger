import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { newAboutAction } from '../../../../../../../../redux/userDetails/userDetailsActions';

const Div = styled.div`
    @media (max-width:425px) {
        display:flex;
        min-height:50px;
        padding:0 20px 10px 20px;
        #content{
            margin-left:20px;
            width:80%;
            box-sizing:border-box;
            border-bottom:1px solid #0002;
            #content-1{
                color:#0008;
                font-size:15px;
                display:flex;
                #edit {
                    height: 12px;
                    color: #f00;
                    width: 12px;
                    margin-left: auto;
                }
                #update{ 
                    height: 12px;
                    color: green;
                    width: 12px;
                    margin-left: auto; 
                }
            }
            #content-2{
                color:black;
                font-size:14px;
                word-break:break-all;
                font-family: 'Chilanka', cursive;
                font-weight:900;
                #about{
                    outline:none;
                   font-family: 'Chilanka', cursive;
                }
            }
        }
    }
`;

const ProfileTile = ({ value, Logo }) => {
    const { email, name, _id } = useSelector( state => state.userDetails );
    const { socket } = useSelector( state => state.socket );
    const dispatch = useDispatch();

    const [ edit, setEdit ] = useState(false);
    const [ newAbout, setNewAbout ] = useState(value);

    const updateAbout = () => {
        socket.emit('new-about',{ email, name, _id, newAbout });
        dispatch( newAboutAction({ newAbout }) );
        setEdit(false);
    }

    return (
        <Div>
            <Logo />
            <div id="content" >
                <div id="content-1" > 
                    <div> About </div>
                    {
                        edit 
                        ? <svg id='update'onClick={ updateAbout } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="24" height="24"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="m2.0044 6.6876l1.2789 2.2832 9.5747-8.9708 1.142 2.2593-10.218 9.7407-3.782-3.9102 2.0044-1.4022z"/></svg>
                        : <svg id='edit' onClick={ () => setEdit(true) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" > <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                    }
                </div>
                <div id="content-2" > 
                    { 
                        edit ?
                        <textarea id="about" cols="30" rows="10" spellCheck={false}
                            onChange={ e => setNewAbout(e.target.value) } >
                            {value}
                        </textarea> :
                        <> { value } </> 
                    } 
                </div>
            </div>
        </Div>
    )
}

export default ProfileTile;
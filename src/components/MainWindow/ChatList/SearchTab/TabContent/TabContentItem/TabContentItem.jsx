import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { startChatAction } from '../../../../../../redux/chatDetails/chatDetailsActions' ;

const Div = styled.div`
    @media (max-width:425px) {
        height:50px;
        width:100%;
        box-sizing:border-box;
        overflow:hidden;
        padding:0 8%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        border-bottom: 1px solid #999; 
        #image{
            height:40px;
            width:40px;
            border-radius:20px;
        }
        #name-email{
            width:70%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            margin-left:10px;
            white-space:nowrap;
            #name{
                font-size:17px;
                overflow:hidden;
                font-family: 'Balsamiq Sans', cursive;
            }
            #email{
                font-size:16px;
                color:#aaa;
                overflow:hidden;
                display:flex;
                #bold{
                    font-weight:900;
                    color:#333;
                }
            }
        }
    }
`;

const TabContentItem = ({ value }) => {
    const { searchText } = useSelector( state => state.search );
    const dispatch = useDispatch();

    const index = () => value.email.indexOf(searchText) ;

    // [ 'email', 'name', '_id', picture, about ], 

    return(
        <Div onClick={ () => dispatch( startChatAction({ 
                chattingWithEmail : value.email , 
                chattingWithName : value.name ,
                chattingWithId : value._id ,
                chattingWithPicture : value.picture ,
                chattingWithAbout : value.about
            }) )} >
            <img id="image" src={ value.picture } alt='profile-picture' />
            <div id="name-email">
                <div id='name' >{ value.name }</div>
                <div id='email'>   
                    {/* { value.email } */}
                    { value.email.slice( 0 , index() )  }
                    <div id='bold' > { value.email.slice( index() , index() +searchText.length ) } </div> 
                    { value.email.slice( index() +searchText.length ) }
                </div>  
            </div>    
        </Div>
    );
}

export default TabContentItem;
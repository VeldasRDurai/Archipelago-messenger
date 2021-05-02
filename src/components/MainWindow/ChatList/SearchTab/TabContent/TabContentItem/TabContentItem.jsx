import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { startChatAction } from '../../../../../../redux/chatDetails/chatDetailsActions' ;

const Div = styled.div`
    @media (max-width:425px) {
        height:50px;
        padding:0 8%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        border-bottom: 1px solid #999; 
        #name{
            font-size:20px;
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
`;

const TabContentItem = ({ value }) => {
    const { searchText } = useSelector( state => state.search );
    const dispatch = useDispatch();

    const index = () => value.email.indexOf(searchText) ;

    // [ 'email', 'name', '_id' ], 

    return(
        <Div onClick={ () => dispatch( startChatAction({ 
                chattingWithEmail : value.email, 
                chattingWithName : value.name,
                chattingWithId : value._id 
            }) )} >
            <div id='name' >{value.name }</div>
            <div id='email'>   
                {/* { value.email } */}
                { value.email.slice( 0 , index() )  }
                <div id='bold' > { value.email.slice( index() , index() +searchText.length ) } </div> 
                { value.email.slice( index() +searchText.length ) }
            </div> 
        </Div>
    );
}

export default TabContentItem;
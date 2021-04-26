import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    @media (max-width:425px) {
        height:60px;
        padding:0 8%;
        display:flex;
        flex-direction:row;
        align-items:center;
        border-bottom: 1px solid #999;
        & #name{
            font-size:20px;
        }
        & #unread{
            margin-left:auto;
            height:18px;
            width:18px;
            border-radius:9px;
            color:white;
            background-color:#06d755;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`;

const ListItem = ({ name }) => {
    return(
        <Div>
            <div id='name' > { name || "NAME" } </div>
            <div id='unread' > 3 </div>
        </Div>
    );
}

export default ListItem;
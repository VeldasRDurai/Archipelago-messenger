import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    @media (max-width:425px) {
        display:flex;
        min-height:50px;
        padding:0 20px 10px 20px;
        #content{
            margin-left:20px;
            width:80%;
            box-sizing:border-box;
            border-bottom:1px solid #0008;
            #content-1{
                color:#0008;
                font-size:15px; 
            }
            #content-2{
                /* font-family: 'Balsamiq Sans'; */
                font-family: 'Chilanka', cursive;
                font-weight:900;
                color:black;
                font-size:14px;
                word-break:break-all;
            }
        }
    }
`;

export default function ProfileTile({ heading, value, Logo }) {
    return (
        <Div>
            <Logo />
            <div id="content" >
                <div id="content-1" > {heading} </div>
                <div id="content-2" > {value} </div>
            </div>
        </Div>
    )
}

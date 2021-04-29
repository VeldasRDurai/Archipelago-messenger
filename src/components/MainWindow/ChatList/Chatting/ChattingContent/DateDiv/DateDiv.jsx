import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    align-self:center;
    margin:10px;
    background-color:#e1f3fb;
    color:black;
    box-shadow:2px 2px 4px grey;
    border-radius:7px;
    padding:4px;
    font-size:12px;
`;
const DateDiv = ({ date }) => {
    //  const style = {
    //     alignSelf:"center",
    //     margin:"10px 10px 10px 10px ",
    //     height : "auto", 
    //     width : "auto",
    //     backgroundColor : "#e1f3fb",
    //     color:"black",
    //     boxShadow :"2px 2px 4px grey" ,
    //     borderRadius : "7px",
    //     padding : "4px" ,
    //     fontSize : "12px"
    // };
    return ( 
        <Div>
            { new Date(date).toLocaleDateString() }
        </Div>
    );
}

export default DateDiv;
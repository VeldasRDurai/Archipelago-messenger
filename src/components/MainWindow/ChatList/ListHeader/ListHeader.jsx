import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    @media (max-width:425px) {
        height:80px;
        padding:0 8%;
        /* font-family: 'Orelega One', cursive ; */
        /* font-family: 'Caveat', cursive; */
        /* font-family: 'Jomhuria', cursive; */
        font-family: 'Merienda One', cursive;
        font-size:18px;
        background-color:#107050;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
        /* & #search-logo {
            margin-left:auto;
        } */
    }
`;

const ListHeader = () => {
    return(
        <Div>
            <div id='heading'> Archipelago </div>
            {/* <div id='search-logo'> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z">
                    </path>
                </svg> 
            </div> */}
        </Div>
    );
}

export default ListHeader;
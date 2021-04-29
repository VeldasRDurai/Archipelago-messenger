import { UPDATE_SOCKET } from './socketTypes';

const initialState = {
    socket : null
}

const socketReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case UPDATE_SOCKET :
            return { ...state ,
                socket : action.socket
            };
        default : 
            return state;
    }
}

export default socketReducer;
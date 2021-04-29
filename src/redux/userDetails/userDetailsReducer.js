import { LOGED_IN , LOGED_OUT } from './userDetailsTypes';

const initialState = { 
    isloged: false ,
    email  : '' ,
    name   : '' ,
}

const userDetailsReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGED_IN : 
            return { ...state , 
                isloged : true,
                email   : action.email,
                name    : action.name
            }
        case LOGED_OUT : 
            return { ...state ,
                isloged : false,
                email   : '' ,
                name    : ''  
            }
        default : 
            return state;
    }
}

export default userDetailsReducer;
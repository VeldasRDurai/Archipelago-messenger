import { LOGED_IN , LOGED_OUT } from './userDetailsTypes';

const initialState = { 
    isloged: false ,
    email  : '' ,
    name   : '' ,
    _id    : undefined ,
    picture : ''
}

const userDetailsReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGED_IN : 
            return { ...state , 
                isloged : true,
                email   : action.email,
                name    : action.name,
                _id     : action._id,
                picture : action.picture
            }
        case LOGED_OUT : 
            return { ...state ,
                isloged : false,
                email   : '' ,
                name    : '' ,
                _id     : undefined ,
                picture : ''
            }
        default : 
            return state;
    }
}

export default userDetailsReducer;
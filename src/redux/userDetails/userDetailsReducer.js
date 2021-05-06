import { LOGED_IN, NEW_ABOUT, LOGED_OUT } from './userDetailsTypes';

const initialState = { 
    isloged : false ,
    email   : '' ,
    name    : '' ,
    _id     : undefined ,
    picture : '',
    about   : ''
}

const userDetailsReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGED_IN : 
            return { ...state , 
                isloged : true,
                email   : action.email,
                name    : action.name,
                _id     : action._id,
                picture : action.picture,
                about   : action.about
            }
        case NEW_ABOUT : 
            return { ...state ,
                about : action.newAbout
            }
        case LOGED_OUT : 
            return { ...state ,
                isloged : false,
                email   : '' ,
                name    : '' ,
                _id     : undefined ,
                picture : '' ,
                about   : ''
            }
        default : 
            return state;
    }
}

export default userDetailsReducer;
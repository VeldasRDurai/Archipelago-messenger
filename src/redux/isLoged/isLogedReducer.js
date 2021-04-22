import { LOGED_IN , LOGED_OUT } from './isLogedTypes';

const initialState = { isloged : false }

const isLogedReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGED_IN : return { ...state , isloged : true }
        case LOGED_OUT : return { ...state , isloged : false }
        default : return state;
    }
}

export default isLogedReducer;
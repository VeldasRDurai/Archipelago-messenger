import { START_CHAT, UPDATE_OLD_CHAT, APPEND_NEW_CHAT, END_CHAT } from './chatDetailsTypes';

const initialState = {
    isChatting : false ,
    withEmail : '' , 
    oldChat : []
}

const chatDetailsReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case START_CHAT : 
            return { ...state ,
                isChatting : true ,
                withEmail : action.withEmail
            };
        case UPDATE_OLD_CHAT :
            return { ...state ,
                oldChat : action.oldChat
            };
        case APPEND_NEW_CHAT :
            return { ...state ,
                oldChat :  [ ...state.oldChat ,  action.newChat ]
            };
        case END_CHAT : 
            return { ...state ,
                isChatting: false ,
                withEmail : '' , 
                oldChat  : []
            };
        default : 
            return state;
    }
}

export default chatDetailsReducer;
import { START_CHAT, UPDATE_OLD_CHAT, APPEND_NEW_CHAT, HE_IS_ONLINE, HE_IS_OFFLINE, END_CHAT } from './chatDetailsTypes';

const initialState = {
    isChatting : false,
    chattingWithEmail : '', 
    chattingWithName : '',
    chattingWithId : '', 
    oldChat : [] ,
    online : undefined ,
    lastSeen : undefined
}

const chatDetailsReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case START_CHAT : 
            return { ...state ,
                isChatting : true,
                chattingWithEmail : action.chattingWithEmail,
                chattingWithName : action.chattingWithName,
                chattingWithId : action.chattingWithId
            };
        case UPDATE_OLD_CHAT :
            return { ...state ,
                oldChat : action.oldChat
            };
        case APPEND_NEW_CHAT :
            return { ...state ,
                oldChat :  [ ...state.oldChat ,  action.newChat ]
            };
        case HE_IS_ONLINE :
            return { ...state ,
                online : true ,
                lastSeen : undefined
            };
        case HE_IS_OFFLINE : 
            return { ...state ,
                online : false ,
                lastSeen : action.lastSeen
            };
        case END_CHAT : 
            return { ...state ,
                isChatting: false ,
                chattingWithEmail : '' , 
                chattingWithName : '' ,
                chattingWithId : '' ,
                oldChat  : [] ,
                online : undefined ,
                lastSeen : undefined
            };
        default : 
            return state;
    }
}

export default chatDetailsReducer;
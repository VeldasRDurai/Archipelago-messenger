import { START_CHAT, UPDATE_OLD_CHAT, APPEND_NEW_CHAT, HE_IS_ONLINE, HE_IS_OFFLINE, TOGGLE_TYPING, END_CHAT } from './chatDetailsTypes';

const initialState = {
    isChatting : false,
    chattingWithEmail : '', 
    chattingWithName : '',
    chattingWithId : '', 
    chattingWithPicture : '',
    chattingWithAbout : '',
    isTyping : false ,
    oldChat : [] ,
    newChat : [] ,
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
                chattingWithId : action.chattingWithId,
                chattingWithPicture : action.chattingWithPicture,
                chattingWithAbout : action.chattingWithAbout,
            };
        case UPDATE_OLD_CHAT :
            return { ...state ,
                oldChat : action.oldChat,
                newChat : []
            };
        case APPEND_NEW_CHAT :
            return { ...state ,
                newChat :  [ action.newChat, ...state.newChat ]
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
        case TOGGLE_TYPING : 
            return { ...state ,
                isTyping : action.isTyping
            }
        case END_CHAT : 
            return { ...state ,
                isChatting : false,
                chattingWithEmail : '', 
                chattingWithName : '',
                chattingWithId : '', 
                chattingWithPicture : '',
                chattingWithAbout : '',
                isTyping : false ,
                oldChat : [] ,
                online : undefined ,
                lastSeen : undefined
            };
        default : 
            return state;
    }
}

export default chatDetailsReducer;
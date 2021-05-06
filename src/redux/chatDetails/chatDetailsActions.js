import { START_CHAT, UPDATE_OLD_CHAT, APPEND_NEW_CHAT, HE_IS_ONLINE, HE_IS_OFFLINE, TOGGLE_TYPING, END_CHAT } from './chatDetailsTypes';

const startChatAction = ({ chattingWithEmail, chattingWithName, chattingWithId, chattingWithPicture, chattingWithAbout }) => {
    return { 
        type : START_CHAT ,
        chattingWithEmail ,
        chattingWithName ,
        chattingWithId ,
        chattingWithPicture ,
        chattingWithAbout
    }
}
const updateOldChatAction = ({ oldChat }) => {
    return { 
        type : UPDATE_OLD_CHAT ,
        oldChat : oldChat
    }
}
const appendNewChatAction = ({ newChat }) => {
    return {
        type : APPEND_NEW_CHAT ,
        newChat : newChat
    }
}
const heIsOnlineAction = () => {
    return {
        type : HE_IS_ONLINE 
    }
}
const heIsOfflineAction = ({ lastSeen }) => {
    return {
        type :HE_IS_OFFLINE ,
        lastSeen
    }
}
const toggleTypingAction = ({ isTyping }) => {
    return {
        type : TOGGLE_TYPING ,
        isTyping
    }
}
const endChatAction = () => {
    return {
        type : END_CHAT 
    }
}

export { 
    startChatAction, 
    updateOldChatAction, 
    appendNewChatAction, 
    heIsOnlineAction, 
    heIsOfflineAction, 
    toggleTypingAction,
    endChatAction 
};
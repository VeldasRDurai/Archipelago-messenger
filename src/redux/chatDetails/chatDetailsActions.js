import { START_CHAT, UPDATE_OLD_CHAT, APPEND_NEW_CHAT, HE_IS_ONLINE, HE_IS_OFFLINE, END_CHAT } from './chatDetailsTypes';

const startChatAction = ({ chattingWithEmail, chattingWithName, chattingWithId }) => {
    return { 
        type : START_CHAT ,
        chattingWithEmail ,
        chattingWithName ,
        chattingWithId
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
const endChatAction = () => {
    return {
        type : END_CHAT 
    }
}

export { startChatAction, updateOldChatAction, appendNewChatAction, heIsOnlineAction, heIsOfflineAction, endChatAction };
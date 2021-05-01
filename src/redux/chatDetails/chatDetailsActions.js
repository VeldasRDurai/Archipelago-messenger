import { START_CHAT, UPDATE_OLD_CHAT, APPEND_NEW_CHAT, END_CHAT } from './chatDetailsTypes';

const startChatAction = ({ chattingWithEmail, chattingWithName, chattingWithId }) => {
    return { 
        type : START_CHAT ,
        chattingWithEmail ,
        chattingWithName ,
        chattingWithId
    }
}
const updateOldChat = ({ oldChat }) => {
    return { 
        type : UPDATE_OLD_CHAT ,
        oldChat : oldChat
    }
}
const appendNewChat = ({ newChat }) => {
    return {
        type : APPEND_NEW_CHAT ,
        newChat : newChat
    }
}
const endChatAction = () => {
    return {
        type : END_CHAT 
    }
}

export { startChatAction, updateOldChat, appendNewChat, endChatAction };
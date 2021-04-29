import { UPDATE_SOCKET } from './socketTypes';

const updateSocket = ({ socket }) => {
    return { 
        type : UPDATE_SOCKET ,
        socket : socket
    }
}

export { updateSocket };
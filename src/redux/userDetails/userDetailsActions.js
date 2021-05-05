import { LOGED_IN , LOGED_OUT } from './userDetailsTypes';

const logedInAction = ({ email, name, _id, picture }) => {
    return { 
        type : LOGED_IN, 
        email ,
        name , 
        _id ,
        picture
    }
}
const logedOutAction = () => {
    return {
        type : LOGED_OUT 
    }
}

export { logedInAction , logedOutAction };
import { LOGED_IN , LOGED_OUT } from './userDetailsTypes';

const logedInAction = ({ email, name, _id }) => {
    return { 
        type : LOGED_IN, 
        email ,
        name , 
        _id
    }
}
const logedOutAction = () => {
    return {
        type : LOGED_OUT 
    }
}

export { logedInAction , logedOutAction };
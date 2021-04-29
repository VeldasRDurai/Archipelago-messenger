import { LOGED_IN , LOGED_OUT } from './userDetailsTypes';

const logedInAction = ({ email , name }) => {
    return { 
        type : LOGED_IN ,
        email: email ,
        name : name
    }
}
const logedOutAction = () => {
    return {
        type : LOGED_OUT 
    }
}

export { logedInAction , logedOutAction };
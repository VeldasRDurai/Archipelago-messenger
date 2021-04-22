import { LOGED_IN , LOGED_OUT } from './isLogedTypes';

const logedInAction = () => {
    return { 
        type : LOGED_IN 
    }
}
const logedOutAction = () => {
    return {
        type : LOGED_OUT 
    }
}

export { logedInAction , logedOutAction };
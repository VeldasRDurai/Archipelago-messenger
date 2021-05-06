import { LOGED_IN, NEW_ABOUT, LOGED_OUT } from './userDetailsTypes';

const logedInAction = ({ email, name, _id, picture, about }) => {
    return { 
        type : LOGED_IN, 
        email ,
        name , 
        _id ,
        picture ,
        about
    }
}
const newAboutAction = ({ newAbout }) => {
    return {
        type : NEW_ABOUT,
        newAbout
    }
}
const logedOutAction = () => {
    return {
        type : LOGED_OUT 
    }
}

export { logedInAction, newAboutAction, logedOutAction };
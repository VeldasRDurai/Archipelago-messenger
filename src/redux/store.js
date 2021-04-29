import { combineReducers, createStore } from 'redux';

import userDetailsReducer from './userDetails/userDetailsReducer';
import chatDetailsReducer from './chatDetails/chatDetailsReducer';
import searchReducer from './search/searchReducer';
import socketReducer from './socket/socketReducer';

const rootReducer = combineReducers({
    userDetails : userDetailsReducer,
    chatDetails : chatDetailsReducer,
    search : searchReducer,
    socket : socketReducer
});

const store = createStore( rootReducer );

export default store;
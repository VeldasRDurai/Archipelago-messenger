import { UPDATE_SEARCH_RESULT , UPDATE_SEARCH_TEXT } from './searchTypes';

const initialState = {
    searchText : '' ,
    searchResult : []
}

const searchReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case UPDATE_SEARCH_RESULT : 
            return { ...state ,
                searchResult : action.searchResult
            };
        case UPDATE_SEARCH_TEXT : 
            return action.searchText === '' ? 
                { ...state , searchText : '' , searchResult : [] } :
                { ...state , searchText : action.searchText } ;
        default : 
            return state;
    }
}

export default searchReducer;
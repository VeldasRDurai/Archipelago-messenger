import { UPDATE_SEARCH_RESULT, UPDATE_SEARCH_TEXT } from './searchTypes';

const updateSearchResultAction = ({ searchResult }) => {
    return { 
        type : UPDATE_SEARCH_RESULT ,
        searchResult : searchResult   
    }
}
const updateSearchTextAction = ({ searchText }) => {
    return {
        type : UPDATE_SEARCH_TEXT ,
        searchText : searchText
    }
}

export { updateSearchResultAction, updateSearchTextAction };
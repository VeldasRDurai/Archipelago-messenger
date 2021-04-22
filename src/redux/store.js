import { createStore } from 'redux';
import isLogedReducer from './isLoged/isLogedReducer';

const store = createStore(isLogedReducer);

export default store;
import { combineReducers } from 'redux';

// importing reducer
import addNote from './addNote';

// reducer combinator
const AppReducer = combineReducers({
    addNote,
});

export default AppReducer;
import { combineReducers } from 'redux';
import app from './AppReducer';
import nav from './NavReducer';

export default combineReducers({
    app, nav
});

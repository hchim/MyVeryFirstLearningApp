import { combineReducers } from 'redux';
import app from './AppReducer';
import nav from './NavReducer';
import home from './HomeReducer';

export default combineReducers({
    app, nav, home
});

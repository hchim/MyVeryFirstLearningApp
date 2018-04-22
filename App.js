import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import { Provider } from 'react-redux';
import AppNavigator from './containers/AppNavigator';
import { middleware } from './utils/redux';

let store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/components/navigators/AppWithNavigationState';
import { middleware } from './src/utils/redux';

const store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
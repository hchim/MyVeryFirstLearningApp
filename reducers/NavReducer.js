import React from 'react';
import { RootNavigator } from '../components/navigators/RootNavigator';
import { NavigationActions, DrawerActions } from 'react-navigation';
const { NAVIGATE, BACK } = NavigationActions;
const { OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER } = DrawerActions;
const Navigator = RootNavigator;

const initialState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Home')
);

export default (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case BACK:
            nextState = Navigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case NAVIGATE:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
        case OPEN_DRAWER:
        case CLOSE_DRAWER:
        case TOGGLE_DRAWER:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
        default:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};


import React from 'react';
import RootNavigator from '../components/navigators/RootNavigator';
import { DrawerActions, NavigationActions } from 'react-navigation';

const initialState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams('HomeStack')
);

export default (state = initialState, action) => {
    switch (action.type) {
        case DrawerActions.OPEN_DRAWER:
        case DrawerActions.CLOSE_DRAWER:
        case NavigationActions.NAVIGATE:
            console.debug("Navigation action: " + JSON.stringify(action));
         return RootNavigator.router.getStateForAction(action, state);
    }

    return state;
};
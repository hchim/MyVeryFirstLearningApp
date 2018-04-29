import { DrawerActions, NavigationActions } from 'react-navigation';

import RootNavigator from '../components/navigators/RootNavigator';

const initialState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams('HomeStack')
);

export default (state = initialState, action) => {
    switch (action.type) {
        case DrawerActions.OPEN_DRAWER:
        case DrawerActions.CLOSE_DRAWER:
        case NavigationActions.NAVIGATE:
        case NavigationActions.BACK: {
            console.debug('Navigation action: ' + JSON.stringify(action));
            return RootNavigator.router.getStateForAction(action, state);
        }
        default: {
            return state;
        }
    }
};
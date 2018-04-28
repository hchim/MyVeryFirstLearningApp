import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';
import { NavigationHeaderStyle } from '../../common/CommonStyles';

export const SettingsNavigator = createStackNavigator(
    {
        Settings: {
            screen: SettingsScreen
        }
    },
    {
        initialRouteName: 'Settings',
        navigationOptions: NavigationHeaderStyle
    }
);

export default SettingsNavigator;

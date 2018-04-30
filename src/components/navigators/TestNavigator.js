import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DoubleScreen from '../screens/DoubleScreen';
import { NavigationHeaderStyle } from '../../common/CommonStyles';

export const TestNavigator = createStackNavigator(
    {
        DoubleTest: {
            screen: DoubleScreen
        }
    },
    {
        initialRouteName: 'DoubleTest',
        navigationOptions: NavigationHeaderStyle
    }
);

export default TestNavigator;

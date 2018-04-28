import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SingleScreen from '../screens/SingleScreen';
import { NavigationHeaderStyle } from '../../common/CommonStyles';

export const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Single: {
            screen: SingleScreen
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: NavigationHeaderStyle
    }
);

export default HomeNavigator;

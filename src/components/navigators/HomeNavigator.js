import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SingleScreen from '../screens/SingleScreen';

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
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

export default HomeNavigator;

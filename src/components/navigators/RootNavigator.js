import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import TestNavigator from './TestNavigator';
import { Ionicons } from '@expo/vector-icons';

const RootNavigator = createDrawerNavigator(
    {
        HomeStack: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: <Ionicons name="ios-home-outline" size={24} color='#FFF' />
            }
        },
        TestStack: {
            screen: TestNavigator,
            navigationOptions: {
                drawerLabel: 'Test',
                drawerIcon: <Ionicons name="ios-book-outline" size={24} color='#FFF' />,
            }
        },
        SettingsStack: {
            screen: SettingsNavigator,
            navigationOptions: {
                drawerLabel: 'Settings',
                drawerIcon: <Ionicons name="ios-settings-outline" size={24} color='#FFF' />,
            }
        }
    },
    {
        initialRouteName: 'HomeStack',
        drawerBackgroundColor: '#333',
        contentOptions: {
            activeBackgroundColor: '#777',
            labelStyle: {
                color: '#FFF'
            }
        }
    }
);

export default RootNavigator;
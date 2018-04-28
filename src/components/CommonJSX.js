import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import HeaderButtons from 'react-navigation-header-buttons';
import { DrawerActions, NavigationActions, HeaderBackButton } from 'react-navigation';

/**
 * Create Drawer Header Button
 * @param navigation
 * @returns {JSX}
 */
export const createDrawerHeaderButton = (navigation) => {
    return (
        <HeaderButtons IconComponent={Ionicons} iconSize={24} color="#fff">
            <HeaderButtons.Item
                title="Home_Nav"
                iconName="ios-menu-outline"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        </HeaderButtons>
    );
};

/**
 * Create Back Header Button
 * @param navigation
 * @returns {JSX}
 */
export const createBackHeaderButton = (navigation) => {
    return (
        <HeaderBackButton tintColor='#fff'
                          onPress={() => navigation.dispatch(NavigationActions.back())}
        />
    );
};
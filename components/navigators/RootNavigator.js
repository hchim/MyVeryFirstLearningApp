import React from 'react';
import { BackHandler } from "react-native";
import { createDrawerNavigator, NavigationActions } from 'react-navigation';
import HomeNavigator from '../navigators/HomeNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import PropTypes from 'prop-types';
import { addListener } from '../../utils/redux';
import { Ionicons } from '@expo/vector-icons';

export const RootNavigator = createDrawerNavigator(
    {
        HomeStack: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: <Ionicons name="ios-home-outline" size={24} color='#FFF' />
            }
        },
        Settings: {
            screen: SettingsScreen,
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

class NavigatorWithState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { dispatch, nav } = this.props;
        const navigation = {
            dispatch,
            state: nav,
            addListener,
        };

        return (
            <RootNavigator navigation={navigation} />
        );
    }
}

export default NavigatorWithState;

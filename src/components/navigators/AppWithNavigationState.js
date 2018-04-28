import React from 'react';
import { BackHandler } from "react-native";
import PropTypes from 'prop-types';
import { addListener } from '../../utils/redux';
import { connect } from 'react-redux';
import RootNavigator from './RootNavigator';

class AppWithNavigationState extends React.Component {
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

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

/**************************************************************************
 * Container
 **************************************************************************/

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

export default connect(mapStateToProps)(AppWithNavigationState);

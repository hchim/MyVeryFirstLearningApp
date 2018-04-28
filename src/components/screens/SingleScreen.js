import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ResponsiveComponent from '../ResponsiveComponent';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { HeaderBackButton, NavigationActions } from 'react-navigation';

class SingleScreen extends ResponsiveComponent {
    static navigationOptions = ({navigation}) => {
        const title = navigation.state.params.category.name;
        return {
            title: title,
            headerLeft: (
                <HeaderBackButton tintColor='#fff'
                                  onPress={() => navigation.dispatch(NavigationActions.back())}
                />
            )
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.category.name}</Text>
            </View>
        );
    }
}

SingleScreen.propTypes = {
    category: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    }
});

/**************************************************************************
 * Container
 **************************************************************************/

const mapStateToProps = (state, props) => {
    return {
        ...props.navigation.state.params
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleScreen);
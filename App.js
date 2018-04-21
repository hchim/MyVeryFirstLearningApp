import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

let store = createStore(reducers)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Text>Home</Text>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: Constants.statusBarHeight
    }
});
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createDrawerHeaderButton} from '../CommonJSX';

class SettingsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Settings',
            headerLeft: createDrawerHeaderButton(navigation)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default SettingsScreen;

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderButtons from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation';

class SettingsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Settings',
            headerLeft: (
                <HeaderButtons IconComponent={Ionicons} iconSize={24} color="#fff">
                    <HeaderButtons.Item
                        title="Home_Nav"
                        iconName="ios-menu-outline"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                </HeaderButtons>
            )
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

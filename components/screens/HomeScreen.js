import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderButtons from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation';
import CategoryButton from '../home/CategoryButton';
import Categories from '../../common/Categories';
import PropTypes from 'prop-types';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
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
        const rows = []
        const colNum = this.props.columnCount | 2;
        const rowNum = Math.floor(Categories.length / colNum);

        for (let i = 0; i < rowNum; i++) {
            const cols = []
            for (let j = 0; j < colNum; j++) {
                let cat = Categories[i * colNum + j]
                cols.push(
                    <CategoryButton key={j.toString()} text={cat.name} icon={cat.icon} onClick={() => {}}/>
                )
            }

            rows.push(
                <View key={i.toString()} style={styles.row}>
                    {cols}
                </View>
            )
        }

        return (
            <View style={styles.homeContainer}>
                {rows}
            </View>
        );
    }
}

HomeScreen.propTypes = {
    columnCount: PropTypes.oneOf([2, 3])
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    }
});

export default HomeScreen;
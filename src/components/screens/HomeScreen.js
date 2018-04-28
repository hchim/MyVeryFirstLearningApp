import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderButtons from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation';
import CategoryButton from '../home/CategoryButton';
import Categories from '../../common/Categories';
import Platform from '../../utils/Platform';
import SubCategoryModal from "../modals/SubCategoryModal";
import ResponsiveComponent from '../ResponsiveComponent';
import { connect } from 'react-redux'
import { selectCategory } from '../../actions';
import PropTypes from 'prop-types';

class HomeScreen extends ResponsiveComponent {
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
        const colNum = this.state.orientation == Platform.PORTRAIT ? 2 : 3;
        const rowNum = Math.ceil(Categories.length / colNum);

        for (let i = 0; i < rowNum; i++) {
            const cols = []
            for (let j = 0; j < colNum; j++) {
                const index = i * colNum + j;
                const cat = Categories[index];
                if (cat != null) {
                    cols.push(
                        <CategoryButton key={j.toString()}
                                        text={cat.name}
                                        icon={cat.icon}
                                        onClick={() => {this.props.onSelectCategory(cat.subCats)}} />
                    )
                } else {
                    cols.push(
                        <CategoryButton key={j.toString()}
                                        visible={false}
                                        text=""
                                        icon={0}
                                        onClick={() => {this.props.onSelectCategory(cat.subCats)}} />
                    )
                }
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
                <SubCategoryModal />
            </View>
        );
    }
}

HomeScreen.propTypes = {
    onSelectCategory: PropTypes.func.isRequired
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

/**************************************************************************
 * Container
 **************************************************************************/

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory: (categories) => {
            dispatch(selectCategory(categories));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(HomeScreen);
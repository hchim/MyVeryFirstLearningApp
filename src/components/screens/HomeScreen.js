import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import CategoryButton from '../home/CategoryButton';
import Categories from '../../common/Categories';
import Platform from '../../utils/Platform';
import SubCategoryModal from "../modals/SubCategoryModal";
import ResponsiveComponent from '../ResponsiveComponent';
import { selectCategory } from '../../actions';
import {createDrawerHeaderButton} from '../CommonJSX';

class HomeScreen extends ResponsiveComponent {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerLeft: createDrawerHeaderButton(navigation)
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
            <ScrollView style={styles.scrollView}>
                <View style={styles.homeContainer}>
                    {rows}
                    <SubCategoryModal />
                </View>
            </ScrollView>
        );
    }
}

HomeScreen.propTypes = {
    onSelectCategory: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingBottom: 10,
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
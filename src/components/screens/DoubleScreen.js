import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper'

import ResponsiveComponent from '../ResponsiveComponent';
import {createDrawerHeaderButton} from '../CommonJSX';
import SingleItemView from '../home/SingleItemView';
import Categories from '../../common/Categories';
import Platform from '../../utils/Platform';

class DoubleScreen extends ResponsiveComponent {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Test',
            headerLeft: createDrawerHeaderButton(navigation)
        }
    };

    constructor() {
        super();
        this.state.items = Categories[0].subCats[0].items;

    }

    render() {
        const items = this.props.items || this.state.items;
        const styles = createStyle(this.state.orientation);
        console.log("Orientation: " + this.state.orientation);
        const views = [];
        const len = (items.length % 2 == 0) ? items.length : items.length - 1;

        for (let i = 0; i < len; i += 2) {
            views.push(
                <View style={styles.container} key={i}>
                    <SingleItemView key={1} text={items[i].text} image={items[i].image} parentItems={2} />
                    <SingleItemView key={2} text={items[i + 1].text} image={items[i + 1].image} parentItems={2} />
                </View>
            );
        }

        return (
            <Swiper loop={false}
                    showsPagination={false}
                    showsButtons = {false}
                    index={0}
                    style={styles.swiper} >
                {views}
            </Swiper>
        );
    }
}

DoubleScreen.propTypes = {
    items: PropTypes.array
}

const createStyle = (orientation) => StyleSheet.create({
    swiper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: orientation == Platform.PORTRAIT ? 'column' : 'row',
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

export default connect(
    mapStateToProps
)(DoubleScreen);
import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper'

import ResponsiveComponent from '../ResponsiveComponent';
import {createBackHeaderButton} from '../CommonJSX';
import SingleItemView from '../home/SingleItemView';

class SingleScreen extends ResponsiveComponent {
    static navigationOptions = ({navigation}) => {
        const title = navigation.state.params.category.name;
        return {
            title: title,
            headerLeft: createBackHeaderButton(navigation)
        }
    };

    render() {
        const items = this.props.category.items;
        const styles = createStyle(this.state.orientation);
        const views = [];

        for (let i = 0; i < items.length; i++) {
            views.push(
                <SingleItemView key={i} text={items[i].text} image={items[i].image} style={styles.swiper} />
            );
        }

        return (
            <Swiper loop={false}
                    showsPagination={false}
                    showsButtons = {false}
                    index={0}>
                {views}
            </Swiper>
        );
    }
}

SingleScreen.propTypes = {
    category: PropTypes.object.isRequired
}

const createStyle = (orientation) => StyleSheet.create({
    swiper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
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
)(SingleScreen);
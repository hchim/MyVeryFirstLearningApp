import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Platform from '../../utils/Platform';
import ResponsiveComponent from '../ResponsiveComponent';

/**
 * This component shows a single item in the SingleScreen.
 */
class SingleItemView extends ResponsiveComponent {
    render() {
        const styles = createStyle(
            this.state.orientation,
            this.state.rootViewSize,
            this.props.parentItems == 1,
            this.props.backgroundColor
        );

        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} resizeMode='contain' />
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

SingleItemView.defaultProps = {
    text: '',
    parentItems: 1,
    backgroundColor: 'white'
};

SingleItemView.propTypes = {
    text: PropTypes.string,
    image: PropTypes.number.isRequired,
    parentItems: PropTypes.oneOf([1, 2]),
    backgroundColor: PropTypes.string
};

/**
 * Create style
 * @param orientation orientation of the device
 * @param size root view size
 */
const createStyle = (orientation, size, isSingle, backgroundColor) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: backgroundColor,
    },
    image: {
        flex: 1,
        width: orientation == Platform.PORTRAIT ? size.width : (isSingle ? size.width : size.width / 2),
        height: orientation == Platform.PORTRAIT ? (isSingle? size.height : size.height / 2) : size.height,
    },
    text: {
        position: 'absolute',
        bottom: orientation == Platform.PORTRAIT ? 40 : 20,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,
        lineHeight: 24,
        fontSize: 24,
        textAlign: 'center',
        color: '#69e',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
});

export default SingleItemView;
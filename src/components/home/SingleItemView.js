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
        const styles = createStyle(this.state.orientation, this.state.rootViewSize);

        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} resizeMode='contain' />
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

SingleItemView.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired,
}

/**
 * Create style
 * @param orientation orientation of the device
 * @param size root view size
 */
const createStyle = (orientation, size) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: orientation == Platform.PORTRAIT ? 'column' : 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        width: orientation == Platform.PORTRAIT ? size.width : null,
        height: orientation == Platform.PORTRAIT ? null : size.height,
    },
    text: {
        marginBottom: orientation == Platform.PORTRAIT ? 40 : 0,
        marginTop: orientation == Platform.PORTRAIT ? 10 : 0,
        marginLeft: orientation == Platform.PORTRAIT ? 0 : 10,
        marginRight: orientation == Platform.PORTRAIT ? 0 : 60,
        height: 30,
        lineHeight: 24,
        fontSize: 24,
        textAlign: 'center',
        color: '#69e',
    }
});

export default SingleItemView;
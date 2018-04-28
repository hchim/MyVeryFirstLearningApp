import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * This component shows the category button in SubCategoryModal.
 */
class SubCategoryButton extends React.Component {
    render() {
        return (
            <TouchableHighlight style={styles.touchableBtn} underlayColor={'#ddd'} onPress={this.props.onClick}>
                <View style={styles.button}>
                    <Image source={this.props.icon} style={styles.image} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

SubCategoryButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    touchableBtn: {
        marginLeft: 10,
        marginRight: 10,
        width: 50,
        height: 75,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    image: {
        width: 50,
        height: 50
    },
    text: {
        lineHeight: 12,
        fontSize: 12,
        textAlign: 'center',
        color: '#69e',
        width: 50,
        height: 20,
        marginTop: 5
    },
});

export default SubCategoryButton;
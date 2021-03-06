import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Image, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types'

export default class CategoryButton extends React.Component {
    render() {
        let view;
        if (this.props.visible) {
            view = (
                <TouchableHighlight style={styles.touchableBtn} underlayColor={'#ddd'} onPress={this.props.onClick}>
                    <View style={styles.button}>
                        <Image source={this.props.icon} style={styles.image} />
                        <Text style={styles.text}>{this.props.text}</Text>
                    </View>
                </TouchableHighlight>
            );
        } else {
            view = (<View style={styles.space} />);
        }

        return view;
    }
}

CategoryButton.defaultProps = {
    text: '',
    visible: true
};

CategoryButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    space: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    touchableBtn: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    button: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50
    },
    text: {
        flex: 1,
        fontWeight: 'bold',
        lineHeight: 50,
        textAlign: 'center',
        color: '#69e',
        height: 50
    },
});

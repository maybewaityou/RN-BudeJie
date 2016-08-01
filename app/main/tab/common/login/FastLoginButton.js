/* jshint esversion: 6 */

import React, { Component } from 'react';
import Images from '../../../constant/Images';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

var { width, height } = Dimensions.get('window');

class FastLoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.image,
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.button}
                onPress={this.props.onPress}
                onPressIn={() => {
                    this.setState({image: this.props.clickedImage});
                }}
                onPressOut={() => {
                    this.setState({image: this.props.image});
                }}
            >
                <Image source={{uri: this.state.image}} style={styles.image} />
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
    },
    image: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0000',
        marginTop: 10,
    },
});

export default FastLoginButton;

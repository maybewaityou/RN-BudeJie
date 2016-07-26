/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Dimensions from 'Dimensions';
import {
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
                style={{marginTop: 20}}
                onPress={this.props.onPress}
                onPressIn={() => {
                    this.setState({image: this.props.clickedImage});
                }}
                onPressOut={() => {
                    this.setState({image: this.props.image});
                }}
            >
                <Image source={{uri: this.state.image}} style={{ width: 70, height: 70 }} />
                <Text style={[styles.commonText, { fontSize: 16, color: 'white', backgroundColor: '#00000000', marginTop: 10 }]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default FastLoginButton;

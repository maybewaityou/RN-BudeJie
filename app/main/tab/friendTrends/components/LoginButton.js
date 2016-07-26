/* jshint esversion: 6*/

import React, { Component } from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


class LoginButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: Images.loginBackgroundIcon,
            textColor: 'red'
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{marginTop: 30}}
                onPress={this.props.onPress}
                onPressIn={() => {
                    this.setState({image: Images.loginBackgroundClickedIcon, textColor: 'white'});
                }}
                onPressOut={() => {
                    this.setState({image: Images.loginBackgroundIcon, textColor: 'red'});
                }}
            >
                <Image source={{uri: this.state.image}} style={{  justifyContent: 'center', width: 243, height: 48 }}>
                    <Text style={[styles.commonText, { color: this.state.textColor, backgroundColor: '#00000000' }]}>立即登录/注册</Text>
                </Image>
            </TouchableOpacity>
        );
    }
}

export default LoginButton;

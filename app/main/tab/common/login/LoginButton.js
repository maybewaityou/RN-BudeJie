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

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: Images.loginButtonBackgroundIcon,
        };
    }

    render() {
        return (
            <View style={{ borderRadius: 10 }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{marginTop: 20}}
                    onPress={this.props.onPress}
                    onPressIn={() => {
                        this.setState({image: Images.loginButtonClickedBackgroundIcon});
                    }}
                    onPressOut={() => {
                        this.setState({image: Images.loginButtonBackgroundIcon});
                    }}
                >
                    <Image source={{uri: this.state.image}} style={{  justifyContent: 'center', width: 266, height: 40 }}>
                        <Text style={[styles.commonText, { color: 'white', backgroundColor: '#00000000' }]}>登录</Text>
                    </Image>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginButton;

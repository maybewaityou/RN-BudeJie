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

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: Images.loginButtonBackgroundIcon,
        };
    }

    render() {
        return (
            <View style={styles.loginButton}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.button}
                    onPress={this.props.onPress}
                    onPressIn={() => {
                        this.setState({image: Images.loginButtonClickedBackgroundIcon});
                    }}
                    onPressOut={() => {
                        this.setState({image: Images.loginButtonBackgroundIcon});
                    }}
                >
                    <Image source={{uri: this.state.image}} style={styles.image}>
                        <Text style={styles.title}>登录</Text>
                    </Image>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginButton: {
        borderRadius: 10,
    },
    button: {
        marginTop: 20,
    },
    image: {
        justifyContent: 'center',
        width: 266,
        height: 40,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0000',
    }
});

export default LoginButton;

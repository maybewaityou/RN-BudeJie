/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Dimensions from 'Dimensions';
import LoginButton from './LoginButton';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

var { width, height } = Dimensions.get('window');

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closeImage: Images.loginCloseIcon,
            isFocus: false
        };
    }

    /**
     * 创建 X 按钮
     */
    closeButton() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{ alignSelf: 'flex-start', marginTop: 30, marginLeft: 10, padding: 10 }}
                onPress={this.props.close}
                onPressIn={() => {
                    this.setState({closeImage: Images.loginCloseIcon});
                }}
                onPressOut={() => {
                    this.setState({closeImage: Images.loginCloseIcon});
                }}
            >
                <Image source={{uri: this.state.closeImage}} style={{ width: 16, height: 16 }}/>
            </TouchableOpacity>
        );
    }



    /**
     * 创建输入布局
     */
    loginLayout() {
        return (
            <View style={{ width: width, marginTop: 30, alignItems: 'center' }}>
                <Image source={{uri: Images.loginEditBackgroundIcon}} style={{ width: 266, height: 92 }} >
                    <TextInput
                        placeholder='用户名'
                        placeholderTextColor={this.state.isFocus ? 'white' : 'gray'}
                        selectionColor='white'
                        clearButtonMode='while-editing'
                        autoFocus={true}
                        enablesReturnKeyAutomatically={true}
                        style={{ marginLeft: 10, marginTop: 5, color: 'white', height: 40 }}
                        onFocus={() => {
                            this.setState({isFocus: true});
                        }}
                        onBlur={() => {
                            this.setState({isFocus: false});
                        }}
                    />
                    <TextInput
                        placeholder='密码'
                        placeholderTextColor={!this.state.isFocus ? 'white' : 'gray'}
                        selectionColor='white'
                        clearButtonMode='while-editing'
                        secureTextEntry={true}
                        enablesReturnKeyAutomatically={true}
                        style={{ marginLeft: 10, marginTop: 5, color: 'white', height: 40 }}
                        onFocus={() => {
                            this.setState({isFocus: false});
                        }}
                        onBlur={() => {
                            this.setState({isFocus: true});
                        }}
                    />
                </Image>
                <LoginButton />
                <Text style={[styles.commonText, { fontSize: 16, color: 'white', backgroundColor: '#00000000', alignSelf: 'flex-end', marginTop: 20, marginRight: 10 }]}>立即注册</Text>
            </View>
        );
    }

    

    render() {
        return (
            <Image source={{uri: Images.loginViewBackgroundIcon}} style={{ flex: 1, alignItems: 'center' }}>

                {this.closeButton()}

                {this.loginLayout()}


            </Image>
        );
    }
}

export default LoginComponent;

/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../../../styles/Main';
import Images from '../../../../constant/Images';
import LoginButton from '../LoginButton';
import FastLoginButton from '../FastLoginButton';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closeImage: Images.loginCloseIcon,
            registerIcon: Images.loginRegisterIcon,
            isFocus: false,
        };
    }

    /**
     * X 按钮
     */
    dismissButton() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{ alignSelf: 'flex-start', marginTop: 30, marginLeft: 10, padding: 10 }}
                onPress={this.props.dismiss}
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
     * 注册按钮
     */
    registerButton() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{ position: 'absolute', top: 30, right: 10 }}
                onPress={this.props.goToRegister}
                onPressIn={() => {
                    this.setState({registerIcon: Images.loginRegisterClickedIcon});
                }}
                onPressOut={() => {
                    this.setState({registerIcon: Images.loginRegisterIcon});
                }}
            >
                <Image source={{uri: this.state.registerIcon}} style={{  justifyContent: 'center', width: 55, height: 45 }}>
                    <Text style={[styles.commonText, { fontSize: 16, color: 'white', backgroundColor: '#00000000' }]}>注册</Text>
                </Image>
            </TouchableOpacity>
        );
    }

    /**
     * 输入布局
     */
    loginLayout() {
        return (
            <View style={{ width: this.props.width, marginTop: 50, alignItems: 'center' }}>
                <Image source={{uri: Images.loginEditBackgroundIcon}} style={{ width: 266, height: 92 }} >
                    <TextInput
                        placeholder='用户名'
                        placeholderTextColor={this.state.isFocus ? 'white' : 'gray'}
                        selectionColor='white'
                        clearButtonMode='while-editing'
                        autoFocus={this.props.canFocus}
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
                <LoginButton
                    onPress={this.props.login}
                />
                <TouchableOpacity
                    style={{ alignSelf: 'flex-end', padding: 20, paddingTop: 0, marginTop: 20 }}
                    onPress={this.props.goToForgetPassword}
                >
                    <Text style={[styles.commonText, { fontSize: 16, color: 'white', backgroundColor: '#00000000'}]}>忘记密码?</Text>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 快速登录布局
     */
    fastLoginLayout() {
        return (
            <View style={{ justifyContent: 'flex-end', width: this.props.width, position: 'absolute', bottom: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{uri: Images.loginLeftLine}} style={{ width: 103, height: 1 }} />
                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#00000000', marginLeft: 10, marginRight: 10 }}>
                        快速登录
                    </Text>
                    <Image source={{uri: Images.loginRightLine}} style={{ width: 103, height: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <FastLoginButton
                        title='QQ'
                        image={Images.loginQQIcon}
                        clickedImage={Images.loginQQClickedIcon}
                        style={{ flex: 1 }}
                        onPress={this.props.qqLogin}
                    />
                    <FastLoginButton
                        title='新浪微博'
                        image={Images.loginSinaIcon}
                        clickedImage={Images.loginSinaClickedIcon}
                        style={{ flex: 1 }}
                        onPress={this.props.sinaLogin}
                    />
                    <FastLoginButton
                        title='腾讯微博'
                        image={Images.loginTecentIcon}
                        clickedImage={Images.loginTecentClickedIcon}
                        style={{ flex: 1 }}
                        onPress={this.props.tecentLogin}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <Image source={{uri: Images.loginViewBackgroundIcon}} style={{ flex: 1, alignItems: 'center' }}>

                {/* 上边关闭按钮布局 */}
                {this.dismissButton()}

                {/* 上边注册按钮布局 */}
                {this.registerButton()}

                {/* 中间编辑,登录布局 */}
                {this.loginLayout()}

                {/* 底部分享布局 */}
                {this.fastLoginLayout()}

            </Image>
        );
    }
}

export default LoginView;

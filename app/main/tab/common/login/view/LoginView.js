/* jshint esversion: 6 */

import React, { Component } from 'react';
import Images from '../../../../constant/Images';
import LoginButton from '../LoginButton';
import FastLoginButton from '../FastLoginButton';
import {
    StyleSheet,
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
            isUserNameFocus: false,
            isPasswordFocus: false,
        };
    }

    /**
     * X 按钮
     */
    dismissButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.closeButton}
                onPress={this.props.dismiss}
                onPressIn={() => {
                    this.setState({closeImage: Images.loginCloseIcon});
                }}
                onPressOut={() => {
                    this.setState({closeImage: Images.loginCloseIcon});
                }}
            >
                <Image source={{uri: this.state.closeImage}} style={styles.closeButtonImage}/>
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
                style={styles.registerButton}
                onPress={this.props.goToRegister}
                onPressIn={() => {
                    this.setState({registerIcon: Images.loginRegisterClickedIcon});
                }}
                onPressOut={() => {
                    this.setState({registerIcon: Images.loginRegisterIcon});
                }}
            >
                <Image source={{uri: this.state.registerIcon}} style={styles.registerButtonImage}>
                    <Text style={[styles.commonText, styles.registerButtonTitle]}>注册</Text>
                </Image>
            </TouchableOpacity>
        );
    }

    /**
     * 输入布局
     */
    loginLayout() {
        return (
            <View style={[styles.loginLayout, { width: this.props.width }]}>
                <Image source={{uri: Images.loginEditBackgroundIcon}} style={styles.loginBackgroundImage} >
                    <TextInput
                        placeholder='用户名'
                        placeholderTextColor={this.state.isUserNameFocus ? 'white' : 'gray'}
                        selectionColor='white'
                        clearButtonMode='while-editing'
                        autoFocus={this.props.canFocus}
                        enablesReturnKeyAutomatically={true}
                        keyboardType='ascii-capable'
                        style={styles.userNameInput}
                        onFocus={() => {
                            this.setState({isUserNameFocus: true});
                        }}
                        onBlur={() => {
                            this.setState({isUserNameFocus: false});
                        }}
                        onSubmitEditing={() => {
                            this.setState({isPasswordFocus: false});
                        }}
                    />
                    <TextInput
                        placeholder='密码'
                        placeholderTextColor={this.state.isPasswordFocus ? 'white' : 'gray'}
                        selectionColor='white'
                        clearButtonMode='while-editing'
                        secureTextEntry={true}
                        enablesReturnKeyAutomatically={true}
                        style={styles.passwordInput}
                        keyboardType='email-address'
                        onFocus={() => {
                            this.setState({isPasswordFocus: true});
                        }}
                        onBlur={() => {
                            this.setState({isPasswordFocus: false});
                        }}
                        onSubmitEditing={() => {
                            this.setState({isPasswordFocus: false});
                        }}
                    />
                </Image>
                <LoginButton
                    onPress={this.props.login}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.forgetPasswordButton}
                    onPress={this.props.goToForgetPassword}
                >
                    <Text style={[styles.commonText, styles.forgetPasswordButtonTitle]}>忘记密码?</Text>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 快速登录布局
     */
    fastLoginLayout() {
        return (
            <View style={[styles.fastLoginLayout, { width: this.props.width }]}>
                <View style={styles.fastLoginLayoutDes}>
                    <Image source={{uri: Images.loginLeftLine}} style={styles.line} />
                    <Text style={styles.fastLoginLayoutTitle}>
                        快速登录
                    </Text>
                    <Image source={{uri: Images.loginRightLine}} style={styles.line} />
                </View>
                <View style={styles.fastLoginButtonLayout}>
                    <FastLoginButton
                        title='QQ'
                        image={Images.loginQQIcon}
                        clickedImage={Images.loginQQClickedIcon}
                        style={styles.fastLoginButton}
                        onPress={this.props.qqLogin}
                    />
                    <FastLoginButton
                        title='新浪微博'
                        image={Images.loginSinaIcon}
                        clickedImage={Images.loginSinaClickedIcon}
                        style={styles.fastLoginButton}
                        onPress={this.props.sinaLogin}
                    />
                    <FastLoginButton
                        title='腾讯微博'
                        image={Images.loginTecentIcon}
                        clickedImage={Images.loginTecentClickedIcon}
                        style={styles.fastLoginButton}
                        onPress={this.props.tecentLogin}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <Image source={{uri: Images.loginViewBackgroundIcon}} style={styles.container}>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-start',
        marginTop: 30,
        marginLeft: 10,
        padding: 10,
    },
    closeButtonImage: {
        width: 16,
        height: 16,
    },
    registerButton: {
        position: 'absolute',
        top: 30,
        right: 10,
    },
    registerButtonImage: {
        justifyContent: 'center',
        width: 55,
        height: 45,
    },
    registerButtonTitle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: '#00000000',
    },
    loginLayout: {
        marginTop: 50,
        alignItems: 'center',
    },
    loginBackgroundImage: {
        width: 266,
        height: 92,
    },
    userNameInput: {
        marginLeft: 10,
        marginTop: 5,
        color: 'white',
        height: 40,
    },
    passwordInput: {
        marginLeft: 10,
        marginTop: 5,
        color: 'white',
        height: 40,
    },
    forgetPasswordButton: {
        alignSelf: 'flex-end',
        padding: 20,
        paddingTop: 0,
        marginTop: 20,
    },
    forgetPasswordButtonTitle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: '#00000000',
    },
    fastLoginLayout: {
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 20,
    },
    fastLoginLayoutDes: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: 103,
        height: 1,
    },
    fastLoginLayoutTitle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: '#00000000',
        marginLeft: 10,
        marginRight: 10,
    },
    fastLoginButtonLayout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fastLoginButton: {
        flex: 1,
    },
    commonText: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default LoginView;

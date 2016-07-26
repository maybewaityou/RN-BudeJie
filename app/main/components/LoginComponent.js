/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../styles/Main';
import Images from '../constant/Images';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closeImage: Images.loginCloseIcon
        };
    }

    render() {
        return (
            <Image source={{uri: Images.loginViewBackgroundIcon}} style={{ flex: 1, alignItems: 'center' }}>
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
            </Image>
        );
    }
}

export default LoginComponent;

/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../styles/Main';
import {
    View,
    Text,
    Image
} from 'react-native';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Image source={{uri: ''}} style={styles.container}>
                <Text onPress={this.props.close}>
                    dismiss
                </Text>
            </Image>
        );
    }
}

export default LoginComponent;

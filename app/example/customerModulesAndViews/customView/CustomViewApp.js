/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Main';
import {
    NativeModules,
    Text,
    View
} from 'react-native';

class CustomViewApp extends React.Component {
    render() {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>

            </View>
        );
    }
}

export default CustomViewApp;

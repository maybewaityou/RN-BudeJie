/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Main';
import {
    NativeModules,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class CustomExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'haha'
        };
    }

    onPress() {
        NativeModules.CustomModule.call(this.state.text, (text) => {
            this.setState({text});
        });
    }

    render() {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <TouchableOpacity style={{width: 100, height: 44}} onPress={this.onPress.bind(this)}>
                    <Text style={styles.commonText}>Add</Text>
                </TouchableOpacity>
                <Text style={styles.commonText}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

export default CustomExample;

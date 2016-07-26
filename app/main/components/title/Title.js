/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Title';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default title = {
    backButtonComponent: () => {
        return (
            <TouchableHighlight
                underlayColor='red'
                style={styles.titleBackLayout}
            >
                <Text style={styles.titleLeftStyle}>返回</Text>
            </TouchableHighlight>
        );
    },
    essenceTitle: {
        leftBarComponent: () => {
            return (
                <Text style={styles.titleLeftStyle}>Left</Text>
            );
        },
        titleBarComponent: () => {
            return (
                <View style={styles.titleLayoutStyle}>
                    <Text style={styles.titleStyle}>RootRoute</Text>
                </View>
            );
        },
        rightBarComponent: () => {
            return (
                <Text style={styles.titleRightStyle}>Right</Text>
            );
        }
    },
};

/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Title';
import {
  Text,
  View
} from 'react-native';

export default title = {
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
            <Text style={styles.titleLeftStyle}>right</Text>
        );
    }
};

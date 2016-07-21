/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import styles from '../../styles/Title';
import Router from 'react-native-simple-router';
import RootRoute from './components/RootRoute';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class RouterExample extends React.Component {

    backButtonComponent() {
        return (
            <Text style={styles.titleLeftStyle}>返回</Text>
        );
    }

    leftBarComponent() {
        return (
            <Text style={styles.titleLeftStyle}>Left</Text>
        );
    }

    titleBarComponent() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Text style={styles.titleStyle}>RootRoute</Text>
            </View>
        );
    }

    rightBarComponent() {
        return (
            <Text style={styles.titleLeftStyle}>right</Text>
        );
    }

    render() {
        return (
            <Router
                firstRoute={{
                    component: RootRoute,
                    leftCorner: this.leftBarComponent,
                    titleComponent: this.titleBarComponent,
                    rightCorner: this.rightBarComponent,
                }}
                handleBackAndroid={true}
                backButtonComponent={this.backButtonComponent}
                headerStyle={{backgroundColor: '#5cafec'}}
            />
        );
    }
}

export default RouterExample;

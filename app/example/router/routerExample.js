/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

    render() {
        return (
            <Router
                firstRoute={{
                  name: 'RootRoute',
                  component: RootRoute,
                  leftCorner: this.leftBarComponent,
                }}
                backButtonComponent={this.backButtonComponent}
                headerStyle={{backgroundColor: '#5cafec'}}
            />
        );
    }
}

export default RouterExample;

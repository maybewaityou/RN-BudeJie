/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import styles from '../../styles/Main';
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
            <Text style={{
                    color: 'white',
                    fontSize: 16,
                    margin: 10,
                    fontWeight: '600',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>返回</Text>
        );
    }

    leftBarComponent() {
        return (
            <Text style={{
                    color: 'white',
                    fontSize: 16,
                    margin: 10,
                    fontWeight: '600',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>Left</Text>
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

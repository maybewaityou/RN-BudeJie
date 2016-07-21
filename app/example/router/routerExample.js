/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import styles from '../../styles/Title';
import Router from 'react-native-simple-router';
import RootRoute from './components/RootRoute';
import title from './components/Title';
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

    render() {
        return (
            <Router
                firstRoute={{
                    component: RootRoute,
                    leftCorner: title.leftBarComponent,
                    titleComponent: title.titleBarComponent,
                    rightCorner: title.rightBarComponent,
                }}
                handleBackAndroid={true}
                backButtonComponent={this.backButtonComponent}
                headerStyle={{backgroundColor: '#5cafec'}}
            />
        );
    }
}

export default RouterExample;

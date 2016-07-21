/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import styles from '../../../styles/Title';
import HelloPage from './HelloPage';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class RootRoute extends React.Component {

    titleBarComponent() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Text style={styles.titleStyle}>A new screen</Text>
            </View>
        );
    }

    nextPage() {
        this.props.toRoute({
            titleComponent: this.titleBarComponent,
            component: HelloPage
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TouchableHighlight onPress={this.nextPage.bind(this)} underlayColor="transparent">
                  <Text style={{textAlign: 'center', fontSize: 18}}>Next page please!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default RootRoute;

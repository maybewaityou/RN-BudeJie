/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import styles from '../../../styles/Main';
import HelloPage from './HelloPage';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class RootRoute extends React.Component {
    nextPage() {
        this.props.toRoute({
            name: "A new screen",
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

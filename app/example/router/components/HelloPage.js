/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import styles from '../../../styles/Main';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class HelloPage extends React.Component {
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
                  <Text style={{textAlign: 'center', fontSize: 18}}>Hello World~~</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default HelloPage;

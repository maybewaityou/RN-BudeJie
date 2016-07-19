/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import styles from '../../styles/Main';
import { connect } from 'react-redux';
import { add, subtract, delayAdd, delaySubtract } from '../actions/Actions';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class AsyncApp extends Component {

    render() {
        const { dispatch, calculate, calculateDelay } = this.props;
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => {
                    dispatch(add(calculate));
                }}>
                    <Text>
                        Add
                    </Text>
                </TouchableHighlight>
                <Text>
                    {calculate}
                </Text>
            </View>
        );
    }
}

AsyncApp.propTypes = {
    item: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { calculate, calculateDelay } = state;
    return {
        calculate: calculate.item,
        calculateDelay: calculateDelay.item
    };
}

export default connect(mapStateToProps)(AsyncApp);

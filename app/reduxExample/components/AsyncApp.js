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
                <View style={styles.buttonLayout}>
                    <TouchableHighlight style={styles.addButton} onPress={() => {
                        dispatch(add(calculate));
                    }}>
                        <Text>Add</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.subtractButton} onPress={() => {
                        dispatch(subtract(calculate));
                    }}>
                        <Text>Subtract</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.delayAddButton} onPress={() => {
                        dispatch(delayAdd(calculateDelay, 1000));
                    }}>
                        <Text>DelayAdd</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.delaySubtractButton} onPress={() => {
                        dispatch(delaySubtract(calculateDelay, 1000));
                    }}>
                        <Text>DelaySubtract</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>
                        {calculate}
                    </Text>
                    <Text>
                        {calculateDelay}
                    </Text>
                </View>
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

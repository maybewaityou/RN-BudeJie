/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import styles from '../../../styles/Main';
import { connect } from 'react-redux';
import { add, subtract, delayAdd, delaySubtract } from '../actions/Actions';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class AsyncApp extends Component {

    render() {
        const { dispatch, calculate, calculateDelay } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleLayout}>
                    <Text style={styles.title}>
                        ReduxExample
                    </Text>
                </View>
                <View style={styles.buttonLayout}>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        dispatch(add(calculate));
                    }}>
                        <Text style={styles.buttonTitle}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subtractButton} onPress={() => {
                        dispatch(subtract(calculate));
                    }}>
                        <Text style={styles.buttonTitle}>Subtract</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delayAddButton} onPress={() => {
                        dispatch(delayAdd(calculateDelay, 1000));
                    }}>
                        <Text style={styles.buttonTitle}>Delay +</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delaySubtractButton} onPress={() => {
                        dispatch(delaySubtract(calculateDelay, 1000));
                    }}>
                        <Text style={styles.buttonTitle}>Delay -</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultLayout}>
                    <Text style={styles.resultText}>
                        {calculate}
                    </Text>
                    <Text style={styles.resultText}>
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

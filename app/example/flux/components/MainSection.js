/* jshint esversion: 6 */

import React, {Component} from 'react';
import styles from '../../../styles/Main';
import Actions from '../actions/Actions';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

var count = 0;

class MainSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleLayout}>
                    <Text style={styles.title}>
                        FluxExample
                    </Text>
                </View>
                <View style={styles.buttonLayout}>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        Actions.updateText(0, `${++count}`);
                    }}>
                        <Text style={styles.buttonTitle}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subtractButton} onPress={() => {
                        Actions.updateText(0, `${--count}`);
                    }}>
                        <Text style={styles.buttonTitle}>Subtract</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delayAddButton} onPress={() => {
                        Actions.updateText(0, `${++count}`);
                    }}>
                        <Text style={styles.buttonTitle}>Delay +</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delaySubtractButton} onPress={() => {
                        Actions.updateText(0, `${--count}`);
                    }}>
                        <Text style={styles.buttonTitle}>Delay -</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultLayout}>
                    <Text style={styles.resultText}>
                        {this.props.allTodos[0].text}
                    </Text>
                    <Text style={styles.resultText}>
                        {this.props.allTodos[0].text}
                    </Text>
                </View>
            </View>
        );
    }
}

export default MainSection;

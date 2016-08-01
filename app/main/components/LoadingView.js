import React, { Component } from 'react';
import Color from '../../main/constant/Color';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class LoadingView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 16 }}>
                    加载中, 请稍后...
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.defaultBackgroundColor,
    }
});

export default LoadingView;

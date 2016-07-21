/* jshint esversion: 6 */

import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    titleLayoutStyle: {
        backgroundColor: 'red'
    },
    titleStyle: {
        color: 'white',
        fontSize: 18,
        margin: 10,
        fontWeight: '600',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    titleLeftStyle: {
        color: 'white',
        fontSize: 16,
        margin: 10,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'green'
    },
    titleRightStyle: {
        color: 'white',
        fontSize: 16,
        margin: 10,
        fontWeight: '600',
        textAlign: 'center',
        position: 'absolute',
        right: 10,
        bottom: -10,
        backgroundColor: 'green'
    },
});

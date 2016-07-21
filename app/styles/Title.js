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
        padding: 10,
        fontWeight: '600',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    titleRightStyle: {
        color: 'white',
        fontSize: 16,
        padding: 10,
        fontWeight: '600',
        textAlign: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        bottom: -20,
        backgroundColor: 'green'
    },
});

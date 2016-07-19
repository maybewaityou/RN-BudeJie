/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    resultLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resultText: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    buttonLayout: {
        flexDirection: 'row',
    },
    buttonTitle: {
        fontSize: 18,
        textAlign: 'center'
    },
    addButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    subtractButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    delayAddButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    delaySubtractButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
});

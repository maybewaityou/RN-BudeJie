/* jshint esversion: 6 */

import Color from '../main/constant/Color';
import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    titleLayoutStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: Color.defaultTextColor,
        fontSize: 18,
        margin: 10,
        fontWeight: '600',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    titleMainImageLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 107,
        height: 19,
    },
    titleMainLayout: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleBackLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    titleLeftStyle: {
        color: 'white',
        fontSize: 16,
        margin: 10,
        fontWeight: '600',
        textAlign: 'center',
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
    },
});

/* jshint esversion: 6 */

import { combineReducers } from 'redux';
import {
    MODAL,
    DISMISS,
    CAN_FOCUS,
    LOGIN,
    QQ_LOGIN,
    SINA_LOGIN,
    TECENT_LOGIN,
    GO_TO_REGISTER,
    REGISTER
} from '../actions/ActionsType';

function friendTrendsReducer(state = {
    modalVisible: false
}, action) {
    switch (action.type) {
        case MODAL:
            console.log('======>>>>> modal');
            return {
                ...state,
                modalVisible: action.payload.modalVisible
            };
        case DISMISS:
            console.log('======>>>>> dismiss');
            return {
                ...state,
                modalVisible: action.payload.modalVisible
            }
        default:
            return state;
    }
}

function loginReducer(state = {
    canFocus: true,
    userInfo: {}
}, action) {
    switch (action.type) {
        case CAN_FOCUS:
            console.log('======>>>>> canFocus');
            return {
                ...state,
                canFocus: action.payload.canFocus
            };
        case LOGIN:
            console.log('======>>>>> login');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case QQ_LOGIN:
            console.log('======>>>>> qqLogin');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case SINA_LOGIN:
            console.log('======>>>>> sinaLogin');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case TECENT_LOGIN:
            console.log('======>>>>> tecentLogin');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case GO_TO_REGISTER:
            console.log('======>>>>> goToRegister');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    friendTrendsReducer,
    loginReducer
});

export default rootReducer;

/* jshint esversion: 6 */

import { combineReducers } from 'redux';
import {
    MODAL,
    DISMISS,
    CAN_FOCUS
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
    canFocus: true
}, action) {
    switch (action.type) {
        case CAN_FOCUS:
            console.log('======>>>>> canFocus');
            return {
                ...state,
                canFocus: action.payload.canFocus
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

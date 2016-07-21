/* jshint esversion: 6 */

import { combineReducers } from 'redux';
import {
    DEFAULT, ADD, SUBTRACT ,
    DELAY_ADD, DELAY_SUBTRACT
} from '../actions/Actions';

function calculate(state = {
    item: 0
}, action) {
    switch (action.type) {
        case ADD:
            console.log('======>>>>> ADD');
            return {
                ...state,
                item: action.item
            };
        case SUBTRACT:
            console.log('======>>>>> SUBTRACT');
            return {
                ...state,
                item: action.item
            };
        default:
            return state;
    }
}

function calculateDelay(state = {
    item: 0
}, action) {
    switch (action.type) {
        case DELAY_ADD:
            console.log('======>>>>> DELAY_ADD');
            return {
                ...state,
                item: action.item
            };
        case DELAY_SUBTRACT:
            console.log('======>>>>> DELAY_SUBTRACT');
            return {
                ...state,
                item: action.item
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    calculate,
    calculateDelay
});

export default rootReducer;

/* jshint esversion: 6 */

import { combineReducers } from 'redux';
import {
    MODAL,
    DISMISS
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

const rootReducer = combineReducers({
    friendTrendsReducer
});

export default rootReducer;

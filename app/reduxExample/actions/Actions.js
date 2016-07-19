/* jshint esversion: 6 */
'use strict';

/* ============================= Action Type Start =============================== */
export const DEFAULT = 'DEFAULT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const DELAY_ADD = 'DELAY_ADD';
export const DELAY_SUBTRACT = 'DELAY_SUBTRACT';
/* ============================= Action Type End =============================== */

/* ============================= Action Private Start =============================== */
function delayAddAction(item) {
    return {
        type: DELAY_ADD,
        item: item + 1
    };
}

function delaySubtractAction(item) {
    return {
        type: DELAY_SUBTRACT,
        item: item - 1
    };
}

function delay(func, second) {
    return dispatch => {
        new Promise((res, rej) => {
            setTimeout(res, second);
        }).then(() => {
            dispatch(func);
        });
    };
}
/* ============================= Action Private End =============================== */

/* ============================= Action Creator Start =============================== */
export function add(item) {
    return {
        type: ADD,
        item: item + 1
    };
}

export function subtract(item) {
    return {
        type: SUBTRACT,
        item: item - 1
    };
}

export function delayAdd(item, second) {
    return dispatch => {
        console.log('delayAdd');
        return dispatch(delay(delayAddAction(item), second));
    };
}

export function delaySubtract(item, second) {
    return dispatch => {
        console.log('delaySubtract');
        return dispatch(delay(delaySubtractAction(item), second));
    };
}
/* ============================= Action Creator End =============================== */

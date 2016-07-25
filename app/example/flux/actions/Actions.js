/* jshint esversion: 6*/
'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

/* ============================= Action Type Start =============================== */
const DEFAULT = 'DEFAULT';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const DELAY_ADD = 'DELAY_ADD';
const DELAY_SUBTRACT = 'DELAY_SUBTRACT';
/* ============================= Action Type End =============================== */

let Actions = {
    create: (text) => {
        Dispatcher.dispatch({
            actionType: 'create',
            text: text,
        });
    },
    add: (item) => {
        Dispatcher.dispatch({
            type: ADD,
            item: item + 1,
        });
    },
    subtract: (item) => {
        Dispatcher.dispatch({
            type: ADD,
            item: item - 1,
        });
    },
    updateText: (id, text) => {
        Dispatcher.dispatch({
            actionType: 'updateText',
            text: text,
            id: id,
        });
    },
};

export default Actions;

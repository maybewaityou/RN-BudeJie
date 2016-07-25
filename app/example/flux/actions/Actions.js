/* jshint esversion: 6*/
'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

let Actions = {
    create: (text) => {
        Dispatcher.dispatch({
            actionType: 'create',
            text: text,
        });
    },
    action: (actionType, payload) => {
        Dispatcher.dispatch({
            type: actionType,
            payload: payload,
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

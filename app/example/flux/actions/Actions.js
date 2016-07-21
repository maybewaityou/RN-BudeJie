/* jshint esversion: 6*/

import Dispatcher from '../dispatcher/Dispatcher';

let Actions = {
    create: (text) => {
        Dispatcher.dispatch({
            actionType: 'create',
            text: text,
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

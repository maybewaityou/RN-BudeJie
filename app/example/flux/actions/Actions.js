/* jshint esversion: 6*/
'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

let Actions = {
    action: (actionType, payload) => {
        Dispatcher.dispatch({
            type: actionType,
            payload: payload,
        });
    },
};

export default Actions;

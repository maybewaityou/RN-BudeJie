/* jshint esversion: 6 */

import Dispatcher from '../dispatcher/Dispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import { ADD, SUBTRACT } from '../actions/ActionsType';

var CHANGE_EVENT = 'change';

var _payload = {
    item: 0
};

function add(payload = {
    item: 0
}) {
    _payload = {
        ...payload,
        item: payload.item + 1
    };
    return _payload;
}

function subtract(payload = {
    item: 0
}) {
    _payload = {
        ...payload,
        item: payload.item - 1
    };
    return _payload;
}

let Store = assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getPayload: function() {
      return _payload;
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register((action) => {
    var text;
    switch(action.type) {
        case ADD:
            add(action.payload);
            Store.emitChange();
        break;
        case SUBTRACT:
            subtract(action.payload);
            Store.emitChange();
        break;
        default:
        break;
    }
});

export default Store;

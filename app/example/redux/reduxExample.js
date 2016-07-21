/* jshint esversion: 6 */

import React, { Component } from 'react';
import AsyncApp from './components/AsyncApp';
import { Provider } from 'react-redux';
import configureStore from './store/Store';

var store = configureStore();

class ReduxExample extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        );
    }
}

export default ReduxExample;

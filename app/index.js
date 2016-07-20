/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReduxExample from './example/redux/reduxExample';
import RouterExample from './example/router/routerExample';

class App extends Component {
    render() {
        return (
            <RouterExample />
        );
    }
}

export default App;

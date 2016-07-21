/* jshint esversion: 6 */

import React, { Component } from 'react';
import ReduxExample from './example/redux/reduxExample';
import RouterExample from './example/router/routerExample';
import FluxExample from './example/flux/fluxExample';

class App extends Component {
    render() {
        return (
            <RouterExample />
        );
    }
}

export default App;

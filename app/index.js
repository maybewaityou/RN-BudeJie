/* jshint esversion: 6 */

import React, { Component } from 'react';
import ReduxExample from './example/redux/reduxExample';
import RouterExample from './example/router/routerExample';
import FluxExample from './example/flux/fluxExample';
import CustomExample from './example/customerModulesAndViews/customExample';
import RootView from './main/RootView';


class App extends Component {
    render() {
        return (
            <RootView />
        );
    }
}

export default App;

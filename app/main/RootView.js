/* jshint esversion: 6 */

import React, { Component } from 'react';
import TabBar from './components/TabBar';
import {
    View
} from 'react-native';

class RootView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabBar />
        );
    }
}

export default RootView;

/* jshint esversion: 6 */

import React, { Component } from 'react';
import Color from '../constant/Color';
import OriginalRouter from 'react-native-simple-router';

class Router extends React.Component {
    render() {
        return (
            <OriginalRouter
                firstRoute={{
                    component: this.props.route,
                    leftCorner: this.props.leftBarComponent,
                    titleComponent: this.props.titleBarComponent,
                    rightCorner: this.props.rightBarComponent,
                }}
                handleBackAndroid={true}
                backButtonComponent={this.props.backButtonComponent}
                headerStyle={{backgroundColor: Color.titleBackgroundColor}}
            />
        );
    }
}

export default Router;

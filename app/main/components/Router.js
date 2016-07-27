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
                    passProps: this.props.passProps,
                    leftCorner: this.props.leftBarComponent,
                    titleComponent: this.props.titleBarComponent,
                    rightCorner: this.props.rightBarComponent,
                }}
                handleBackAndroid={true}
                backButtonComponent={this.props.backButtonComponent}
                backButtonProps={this.props.backButtonProps}
                headerStyle={{backgroundColor: Color.titleBackgroundColor}}
                statusBarColor='black'
            />
        );
    }
}

export default Router;

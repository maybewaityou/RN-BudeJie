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
                    leftCornerProps: this.props.leftBarComponentProps,
                    titleComponent: this.props.titleBarComponent,
                    titleProps: this.props.titleProps,
                    rightCorner: this.props.rightBarComponent,
                    rightCornerProps: this.props.rightBarComponentProps
                }}
                handleBackAndroid={true}
                backButtonComponent={this.props.backButtonComponent}
                backButtonProps={this.props.backButtonProps}
                headerStyle={{backgroundColor: Color.titleBackgroundColor}}
                statusBarColor='black'
                customAction={this.props.customAction}
            />
        );
    }
}

export default Router;

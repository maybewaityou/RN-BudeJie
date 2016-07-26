/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../../../styles/Main';
import Images from '../../../../constant/Images';
import LoginView from '../view/LoginView';
import Dimensions from 'Dimensions';

var { width, height } = Dimensions.get('window');

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <LoginView
                width={width}
                canFocus={this.props.canFocus}
                dismiss={this.props.dismiss}
                login={() => {
                    console.log('---->>> login');
                }}
                qqLogin={() => {
                    console.log('---->>> qqLogin');
                }}
                sinaLogin={() => {
                    console.log('---->>> sinaLogin');
                }}
                tecentLogin={() => {
                    console.log('---->>> tecentLogin');
                }}
            />
        );
    }
}

export default LoginContainer;

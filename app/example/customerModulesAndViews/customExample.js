/* jshint esversion: 6 */

import React, { Component } from 'react';
import CustomModuleApp from './customModule/CustomModuleApp';
import CustomViewApp from './customView/CustomViewApp';
class CustomExample extends React.Component {

    render() {
        return (
            <CustomViewApp />
        );
    }
}

export default CustomExample;

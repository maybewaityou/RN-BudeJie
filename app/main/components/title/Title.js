/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Title';
import Images from '../../constant/Images';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export class TitleTagLeftComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: Images.titleEssenceLeftIcon
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.titleBackLayout}
                onPressIn={() => {
                    this.setState({image: Images.titleEssenceLeftClickedIcon});
                }}
                onPressOut={() => {
                    this.setState({image: Images.titleEssenceLeftIcon});
                }}
            >
                <Image source={{uri: this.state.image}} style={{ width: 18, height: 15 }}/>
            </TouchableOpacity>
        );
    }
}

export class BackButtonComponent extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Text style={styles.titleLeftStyle}>返回</Text>
        );
    }
}

export class TitleBarComponent extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Text style={styles.titleStyle}>RootRoute</Text>
            </View>
        );
    }
}

export class RightBarComponent extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Text style={styles.titleRightStyle}>Right</Text>
        );
    }
}

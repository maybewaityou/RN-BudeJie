/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Title';
import Images from '../../constant/Images';
import LocalString from '../../constant/LocalString';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


class TitleLeftImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.image
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.titleBackLayout}
                onPress={this.props.onPress}
                onPressIn={() => {
                    this.setState({image: this.props.clickedImage});
                }}
                onPressOut={() => {
                    this.setState({image: this.props.image});
                }}
            >
                <Image source={{uri: this.state.image}} style={{ width: 18, height: 15 }}/>
            </TouchableOpacity>
        );
    }
}

class TitleBarTextComponent extends React.Component {
    render() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Text style={styles.titleStyle}>{this.props.text}</Text>
            </View>
        );
    }
}

/*=================================== Export Start =========================================*/
export class TitleTagLeftComponent extends React.Component {
    render() {
        return (
            <TitleLeftImage
                image={Images.titleEssenceLeftIcon}
                clickedImage={Images.titleEssenceLeftClickedIcon}
            />
        );
    }
}

export class TitleFriendTrendsLeftComponent extends React.Component {
    render() {
        return (
            <TitleLeftImage
                image={Images.titleFriendTrendsIcon}
                clickedImage={Images.titleFriendTrendsClickedIcon}
            />
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

export class TitleImageComponent extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Image source={{uri: Images.titleMainIcon}} style={styles.titleMainImageLayout}/>
            </View>
        );
    }
}

export class TitleBarNewComponent extends React.Component {
    render() {
        return (
            <TitleBarTextComponent
                text={LocalString.tabBarNew}
            />
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

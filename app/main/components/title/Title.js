/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Title';
import Images from '../../constant/Images';
import LocalString from '../../constant/LocalString';
import Button from '../Button';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class TitleLeftImage extends React.Component {
    render() {
        return (
            <Button
                image={this.props.image}
                highlightImage={this.props.clickedImage}
                style={styles.titleBackLayout}
                imageStyle={{ width: 18, height: 15 }}
                onPress={this.props.onPress}
            />
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
                onPress={this.props.onPress}
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
                onPress={this.props.onPress}
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

export class TitleBarFriendTrendsComponent extends React.Component {
    render() {
        return (
            <TitleBarTextComponent
                text={LocalString.titleBarFriendTrends}
            />
        );
    }
}

export class TitleBarMeComponent extends React.Component {
    render() {
        return (
            <TitleBarTextComponent
                text={LocalString.titleBarMe}
            />
        );
    }
}

export class RightBarComponent extends React.Component {
    render() {
        return (
            <Text style={styles.titleRightStyle}>Right</Text>
        );
    }
}

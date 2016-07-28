/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../styles/Title';
import Images from '../../constant/Images';
import Color from '../../constant/Color';
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
    render() {
        return (
            <Button
                leftImage={Images.backIcon}
                highlightLeftImage={Images.backClickedIcon}
                leftImageStyle={{ width: 15, height: 21 }}
                title='返回'
                titleColor={Color.defaultTextColor}
                highlightTitleColor='red'
                titleStyle={{ fontSize: 16 }}
                style={{ marginLeft: 10 }}
                onPress={this.props.onPress}
            />
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

export class TitleBarTextComponent extends React.Component {
    render() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
            </View>
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

export class MineRightBarComponent extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', right: 10, bottom: -10 }}>
                <Button
                    image={Images.moonIcon}
                    highlightImage={Images.moonClickedIcon}
                    imageStyle={{ width: 20, height: 20 }}
                    style={{ padding: 10, paddingRight: 5, paddingBottom: 0 }}
                />
                <Button
                    image={Images.settingIcon}
                    highlightImage={Images.settingClickedIcon}
                    imageStyle={{ width: 20, height: 20 }}
                    style={{ padding: 10, paddingLeft: 5, paddingBottom: 0 }}
                />
            </View>
        );
    }
}

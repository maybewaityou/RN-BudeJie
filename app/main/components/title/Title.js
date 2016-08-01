/* jshint esversion: 6 */

import React, { Component } from 'react';
import Images from '../../constant/Images';
import Color from '../../constant/Color';
import Button from '../Button';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class TitleLeftImage extends Component {
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

const styles = StyleSheet.create({
    titleLayoutStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: Color.defaultTextColor,
        fontSize: 18,
        margin: 10,
        fontWeight: '600',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    titleMainImageLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 107,
        height: 19,
    },
    titleBackLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 10,
    },
    titleRightStyle: {
        color: 'white',
        fontSize: 16,
        margin: 10,
        fontWeight: '600',
        textAlign: 'center',
        position: 'absolute',
        right: 10,
        bottom: -10,
    },
});

/*=================================== Export Start =========================================*/
export class TitleTagLeftComponent extends Component {
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

export class TitleFriendTrendsLeftComponent extends Component {
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

export class BackButtonComponent extends Component {
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

export function backButtonComponent() {
    return (
        <BackButtonComponent
            onPress={() => {
                this.props.toBack();
            }}
        />
    );
}

export class TitleImageComponent extends Component {
    render() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Image source={{uri: Images.titleMainIcon}} style={styles.titleMainImageLayout}/>
            </View>
        );
    }
}

export class TitleBarTextComponent extends Component {
    render() {
        return (
            <View style={styles.titleLayoutStyle}>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

export class RightBarComponent extends Component {
    render() {
        return (
            <Text style={styles.titleRightStyle}>Right</Text>
        );
    }
}

export class MineRightBarComponent extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', right: 10, bottom: -10 }}>
                <Button
                    image={Images.moonIcon}
                    highlightImage={Images.moonClickedIcon}
                    imageStyle={{ width: 20, height: 20 }}
                    style={{ padding: 10, paddingRight: 5, paddingBottom: 0 }}
                    onPress={this.props.onMoonPress}
                />
                <Button
                    image={Images.settingIcon}
                    highlightImage={Images.settingClickedIcon}
                    imageStyle={{ width: 20, height: 20 }}
                    style={{ padding: 10, paddingLeft: 5, paddingBottom: 0 }}
                    onPress={this.props.onSettingPress}
                />
            </View>
        );
    }
}

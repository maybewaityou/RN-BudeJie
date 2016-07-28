/* jshint esversion: 6 */

import React, { Component } from 'react';
import {
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.image,
            leftImage: this.props.leftImage,
            titleColor: this.props.titleColor,
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[{ justifyContent: 'center', alignItems: 'center' }, this.props.style]}
                isVertical={this.props.isVertical}
                onPress={this.props.onPress}
                onPressIn={() => {
                    this.setState({
                        image: this.props.highlightImage,
                        leftImage: this.props.highlightLeftImage,
                        titleColor: this.props.highlightTitleColor,
                    });
                }}
                onPressOut={() => {
                    this.setState({
                        image: this.props.image,
                        leftImage: this.props.leftImage,
                        titleColor: this.props.titleColor,
                    });
                }}
            >
                <Image source={{uri: this.state.image}} style={[{ flexDirection: this.props.isVertical ? 'column' : 'row', justifyContent: this.props.isVertical ? 'center' : 'space-around', alignItems: 'center' }, this.props.imageStyle]}>
                    <Image source={{uri: this.state.leftImage}} style={this.props.leftImageStyle} />
                    <Text style={[{ color: this.state.titleColor, fontSize: 18, textAlign: 'center', backgroundColor: '#00000000', marginTop: this.props.isVertical ? 10 : 0 }, this.props.titleStyle]}>{this.props.title}</Text>
                </Image>
            </TouchableOpacity>
        );
    }
}

export default Button;

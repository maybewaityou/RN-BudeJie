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
            titleColor: this.props.titleColor,
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={this.props.style}
                onPress={this.props.onPress}
                onPressIn={() => {
                    this.setState({
                        image: this.props.highlightImage,
                        titleColor: this.props.highlightTitleColor,
                    });
                }}
                onPressOut={() => {
                    this.setState({
                        image: this.props.image,
                        titleColor: this.props.titleColor,
                    });
                }}
            >
                <Image source={{uri: this.state.image}} style={this.props.imageStyle}>
                    <Text style={[{ color: this.state.titleColor, fontSize: 18, textAlign: 'center', backgroundColor: '#00000000' }, this.props.titleStyle]}>{this.props.title}</Text>
                </Image>
            </TouchableOpacity>
        );
    }
}

export default Button;

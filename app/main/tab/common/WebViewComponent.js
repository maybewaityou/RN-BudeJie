/* jshint esversion: 6 */

import React, { Component } from 'react';
import Color from '../../constant/Color';
import {
    StyleSheet,
    WebView
} from 'react-native';

class WebViewComponent extends Component {
    render() {
        console.log(this.props.data);
        return (
            <WebView
                source={{uri: this.props.data}}
                scalesPageToFit={true}
                contentInset={{ bottom: 49, ...this.props.contentInset}}
                automaticallyAdjustContentInsets={this.props.automaticallyAdjustContentInsets}
                bounces={this.props.bounces}
                decelerationRate={this.props.decelerationRate}
                domStorageEnabled={this.props.domStorageEnabled}
                injectedJavaScript={this.props.injectedJavaScript}
                mediaPlaybackRequiresUserAction={this.props.mediaPlaybackRequiresUserAction}
                onError={this.props.onError}
                onLoad={this.props.onLoad}
                onLoadEnd={this.props.onLoadEnd}
                onLoadStart={this.props.onLoadStart}
                javaScriptEnabled={this.props.javaScriptEnabled}
                onNavigationStateChange={this.props.onNavigationStateChange}
                renderError={this.props.renderError}
                renderLoading={this.props.renderLoading}
                startInLoadingState={this.props.startInLoadingState}
                style={[styles.webView, this.props.style]}
            />
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1,
        backgroundColor: Color.defaultBackgroundColor,
    },
});

export default WebViewComponent;

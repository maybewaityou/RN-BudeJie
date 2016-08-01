import React, { Component, PropTypes } from 'react';
import Images from '../../../constant/Images';
import TopicType from './TopicType';
import Button from '../../../components/Button';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

class CellCenterView extends Component {
    constructor(props) {
        super(props);

        this.renderView = this.renderView.bind(this);
        this.showGifImage = this.showGifImage.bind(this);
        this.showBigPictureButton = this.showBigPictureButton.bind(this);
        this.renderPictureCell = this.renderPictureCell.bind(this);
        this.renderVideoCell = this.renderVideoCell.bind(this);
        this.renderVoiceCell = this.renderVoiceCell.bind(this);
        this.renderWordCell = this.renderWordCell.bind(this);
    }

    showGifImage() {
        if (this.props.data.image2.toLowerCase().endsWith('gif')) {
            return (
                <Image source={{uri: 'common-gif'}} style={styles.gif}/>
            );
        }
    }

    showBigPictureButton() {
        if (parseInt(this.props.data.height) > 250) {
            return (
                <Button
                    image='see-big-picture-background'
                    highlightImage='see-big-picture-background'
                    imageStyle={[styles.bigPictureBackgroundImage, { width: this.props.width - 20 }]}
                    leftImage='see-big-picture'
                    highlightLeftImage='see-big-picture'
                    leftImageStyle={styles.bigPictureLeftImage}
                    title='点击查看大图'
                    titleColor='white'
                    highlightTitleColor='white'
                    titleStyle={styles.bigPictureTitle}
                    style={styles.bigPicture}
                    onPress={this.props.showBigPicture}
                />
            );
        }
    }

    renderPictureCell() {
        return (
            <View style={[ styles.cellLayout, { width: this.props.width - 20 }, this.props.style]}>
                <Image source={{uri: this.props.data.image2}} style={styles.picture} >
                    {this.showGifImage()}
                    {this.showBigPictureButton()}
                </Image>
            </View>
        );
    }

    renderVideoCell() {
        return (
            <View style={[styles.cellLayout, { width: this.props.width - 20 }, this.props.style]}>
                <Image source={{uri: this.props.data.image2}} style={styles.picture} >
                    <Button
                        image='video-play'
                        highlightImage='video-play'
                        imageStyle={styles.buttonBackgroundImage}
                        onPress={this.props.startVideo}
                    />
                <Text style={styles.playCount}>{this.props.data.playcount + '次'}</Text>
                    <Text style={styles.playTime}>
                        { `${parseInt(this.props.data.videotime / 60)} : ${parseInt(this.props.data.videotime % 60)}` }
                    </Text>
                </Image>
            </View>
        );
    }

    renderVoiceCell() {
        return (
            <View style={[styles.cellLayout, { width: this.props.width - 20 }, this.props.style]}>
                <Image source={{uri: this.props.data.image2}} style={styles.picture} >
                    <Button
                        image='playButton'
                        highlightImage='playButtonClick'
                        leftImage='playButtonPlay'
                        highlightLeftImage='playButtonPlay'
                        leftImageStyle={styles.voiceButtonLeftImage}
                        imageStyle={styles.voiceButtonBackgroundImage}
                        onPress={this.props.startVoice}
                    />
                    <Text style={styles.playCount}>{this.props.data.playcount + '次'}</Text>
                    <Text style={styles.playTime}>
                        { `${parseInt(this.props.data.voicetime / 60)} : ${parseInt(this.props.data.voicetime % 60)}` }
                    </Text>
                </Image>
            </View>
        );
    }

    renderWordCell() {
        return (<View />);
    }

    renderView() {
        switch (this.props.data.type) {
            case TopicType.Picture:
                return this.renderPictureCell();
            case TopicType.Voice:
                return this.renderVoiceCell();
            case TopicType.Video:
                return this.renderVideoCell();
            case TopicType.Word:
                return this.renderWordCell();
            default:
                return (<View />);
        }
    }

    render() {
        return (
            <View style={this.props.style}>
                {this.renderView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gif: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 31,
        height: 31,
    },
    bigPictureBackgroundImage: {
        justifyContent: 'center',
        height: 43,
    },
    bigPictureLeftImage: {
        width: 19,
        height: 19,
    },
    bigPictureTitle: {
        fontSize: 16,
        marginLeft: 5,
    },
    bigPicture: {
        position: 'absolute',
        bottom: 0,
    },
    cellLayout: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    picture: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
    },
    buttonBackgroundImage: {
        width: 71,
        height: 71,
    },
    playCount: {
        backgroundColor: '#00000080',
        fontSize: 14,
        color: 'white',
        padding: 5,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    playTime: {
        backgroundColor: '#00000080',
        fontSize: 14,
        color: 'white',
        padding: 5,
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    voiceButtonLeftImage: {
        width: 30,
        height: 30,
    },
    voiceButtonBackgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },

});

export default CellCenterView;

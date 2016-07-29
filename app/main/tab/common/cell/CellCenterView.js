import React, { Component, PropTypes } from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import TopicType from './TopicType';
import Button from '../../../components/Button';
import {
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
                <Image source={{uri: 'common-gif'}} style={{position: 'absolute', left: 0, top: 0, width: 31, height: 31 }}/>
            );
        }
    }

    showBigPictureButton() {
        if (parseInt(this.props.data.height) > 250) {
            return (
                <Button
                    image='see-big-picture-background'
                    highlightImage='see-big-picture-background'
                    imageStyle={{ justifyContent: 'center', width: this.props.width - 20, height: 43 }}
                    leftImage='see-big-picture'
                    highlightLeftImage='see-big-picture'
                    leftImageStyle={{ width: 19, height: 19 }}
                    title='点击查看大图'
                    titleColor='white'
                    highlightTitleColor='white'
                    titleStyle={{ fontSize: 16, marginLeft: 5 }}
                    style={{ position: 'absolute', bottom: 0 }}
                    onPress={this.props.showBigPicture}
                />
            );
        }
    }

    renderPictureCell() {
        return (
            <View style={[{ marginTop: 10, marginLeft: 10, marginRight: 10, width: this.props.width - 20 }, this.props.style]}>
                <Image source={{uri: this.props.data.image2}} style={{ justifyContent: 'center', alignItems: 'center', height: 250 }} >
                    {this.showGifImage()}
                    {this.showBigPictureButton()}
                </Image>
            </View>
        );
    }

    renderVideoCell() {
        return (
            <View style={[{ marginTop: 10, marginLeft: 10, marginRight: 10, width: this.props.width - 20 }, this.props.style]}>
                <Image source={{uri: this.props.data.image2}} style={{ justifyContent: 'center', alignItems: 'center', height: 250 }} >
                    <Button
                        image='video-play'
                        highlightImage='video-play'
                        imageStyle={{ width: 71, height: 71 }}
                        onPress={this.props.startVideo}
                    />
                <Text style={{ backgroundColor: '#00000080', fontSize: 14, color: 'white', padding: 5, position: 'absolute', top: 0, right: 0 }}>{this.props.data.playcount + '次'}</Text>
                    <Text style={{ backgroundColor: '#00000080', fontSize: 14, color: 'white', padding: 5, position: 'absolute', right: 0, bottom: 0 }}>
                        { `${parseInt(this.props.data.videotime / 60)} : ${parseInt(this.props.data.videotime % 60)}` }
                    </Text>
                </Image>
            </View>
        );
    }

    renderVoiceCell() {
        return (
            <View style={[{ marginTop: 10, marginLeft: 10, marginRight: 10, width: this.props.width - 20 }, this.props.style]}>
                <Image source={{uri: this.props.data.image2}} style={{ justifyContent: 'center', alignItems: 'center', height: 250 }} >
                    <Button
                        image='playButton'
                        highlightImage='playButtonClick'
                        leftImage='playButtonPlay'
                        highlightLeftImage='playButtonPlay'
                        leftImageStyle={{ width: 30, height: 30 }}
                        imageStyle={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 60 }}
                        onPress={this.props.startVoice}
                    />
                    <Text style={{ backgroundColor: '#00000080', fontSize: 14, color: 'white', padding: 5, position: 'absolute', top: 0, right: 0 }}>{this.props.data.playcount + '次'}</Text>
                    <Text style={{ backgroundColor: '#00000080', fontSize: 14, color: 'white', padding: 5, position: 'absolute', right: 0, bottom: 0 }}>
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
            <View style={[{  }, this.props.style]}>
                {this.renderView()}
            </View>
        );
    }
}

export default CellCenterView;

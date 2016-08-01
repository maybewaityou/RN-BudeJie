import React, { Component, PropTypes } from 'react';
import Images from '../../../constant/Images';
import Button from '../../../components/Button';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

class CellBottomView extends Component {
    render() {
        return (
            <View style={[styles.cellBottomViewLayout, { width: this.props.width }, this.props.style]}>
                <Image source={{uri: 'cell-content-line'}} style={{ width: this.props.width, height: 1 }} />
                <View style={styles.bottomViewLayout}>
                    <Button
                        leftImage='mainCellDing'
                        highlightLeftImage='mainCellDingClick'
                        leftImageStyle={styles.buttonLeftImage}
                        title={this.props.data.ding ? this.props.data.ding : '顶'}
                        highlightTitleColor='red'
                        titleStyle={styles.buttonTitle}
                        style={styles.button}
                        onPress={this.props.handleDingPress}
                    />
                    <Image source={{uri: 'cell-button-line'}} style={{ width: 1, height: 29 }} />
                    <Button
                        leftImage='mainCellCai'
                        highlightLeftImage='mainCellCaiClick'
                        leftImageStyle={styles.buttonLeftImage}
                        title={this.props.data.cai ? this.props.data.cai : '踩'}
                        highlightTitleColor='red'
                        titleStyle={styles.buttonTitle}
                        style={styles.button}
                        onPress={this.props.handleCaiPress}
                    />
                    <Image source={{uri: 'cell-button-line'}} style={{ width: 1, height: 29 }} />
                    <Button
                        leftImage='mainCellShare'
                        highlightLeftImage='mainCellShareClick'
                        leftImageStyle={styles.buttonLeftImage}
                        title={this.props.data.repost ? this.props.data.repost : '分享'}
                        highlightTitleColor='red'
                        titleStyle={styles.buttonTitle}
                        style={styles.button}
                        onPress={this.props.handleSharePress}
                    />
                    <Image source={{uri: 'cell-button-line'}} style={{ width: 1, height: 29 }} />
                    <Button
                        leftImage='mainCellComment'
                        highlightLeftImage='mainCellCommentClick'
                        leftImageStyle={styles.buttonLeftImage}
                        title={this.props.data.comment ? this.props.data.comment : '评论'}
                        highlightTitleColor='red'
                        titleStyle={styles.buttonTitle}
                        style={styles.button}
                        onPress={this.props.handleCommentPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cellBottomViewLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    bottomViewLayout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
    },
    buttonLeftImage: {
        width: 20,
        height: 20,
    },
    buttonTitle: {
        fontSize: 14,
        marginLeft: 5,
    },
    button: {
        flex: 1,
        height: 40,
    }
});

export default CellBottomView;

import React, { Component } from 'react';
import Color from '../../../../constant/Color';
import Cell from '../../cell/Cell';
import Button from '../../../../components/Button';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    RefreshControl,
    Image,
    PixelRatio
} from 'react-native';
import {
    LazyloadListView,
    LazyloadView
} from 'react-native-lazyload';

class CommentView extends Component {
    constructor(props) {
        super(props);

        console.log('===>>> dataList', this.props.dataList)
        this.renderHeader = this.renderHeader.bind(this);
        this.renderSeparator = this.renderSeparator.bind(this);
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Cell
                    rowData={this.props.data}
                    width={this.props.width}
                    handleMorePress={this.props.handleMorePress.bind(this, this.props.data)}
                    showBigPicture={this.props.showBigPicture.bind(this, this.props.data)}
                    startVideo={this.props.startVideo.bind(this, this.props.data)}
                    startVoice={this.props.startVoice.bind(this, this.props.data)}
                    handleDingPress={this.props.handleDingPress.bind(this, this.props.data)}
                    handleCaiPress={this.props.handleCaiPress.bind(this, this.props.data)}
                    handleSharePress={this.props.handleSharePress.bind(this, this.props.data)}
                    handleCommentPress={this.props.handleCommentPress.bind(this, this.props.data)}
                />
            <Text style={{ fontSize: 16, margin: 10, marginTop: -5, marginBottom: 5 }}>最新评论</Text>
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <LazyloadView
                host='commentList'
                style={{ backgroundColor: 'white', flexDirection: 'row' }}
            >
                <Image source={{uri: rowData.user.profile_image}} style={styles.cellHeaderImage} />
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <View style={styles.cellUserName}>
                        <Image source={{uri: (rowData.user.sex === 'm' ? 'Profile_manIcon' : 'Profile_womanIcon')}} style={styles.cellSexImage} />
                        <Text style={styles.userName}>{rowData.user.username}</Text>
                    </View>
                    <View style={styles.cellContent}>
                        <Text style={styles.content}>{rowData.content}</Text>
                    </View>
                </View>
                <Button
                    isVertical={true}
                    leftImage='commentLikeButton'
                    highlightLeftImage='commentLikeButtonClick'
                    leftImageStyle={styles.likeImage}
                    title={rowData.like_count}
                    titleColor={Color.defaultTextColor}
                    highlightTitleColor='red'
                    titleStyle={styles.likeText}
                    style={styles.like}
                />
            </LazyloadView>
        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={rowID}
                style={styles.separators}
            />
        );
    }

    render() {
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.dataList)
        };
        return (
            <View style={styles.container}>
                <LazyloadListView
                    name='commentList'
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                    renderSeparator={this.renderSeparator}
                    initialListSize={this.props.dataList.length}
                    pageSize={10}
                    contentInset={{ bottom: 49 }}
                    style={{ width: this.props.width }}
                    onEndReachedThreshold={1}
                    onEndReached={this.props.onEndReached}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.defaultBackgroundColor,
    },
    header: {

    },
    separators: {
        backgroundColor: Color.defaultBackgroundColor,
        height: 1 / PixelRatio.get(),
    },
    cellHeaderImage: {
        borderRadius: 25,
        width: 50,
        height: 50,
        margin: 10,
    },
    cellSexImage: {
        width: 13,
        height: 13,
    },
    cellUserName: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    userName: {
        fontSize: 16,
        marginLeft: 5,
    },
    cellContent: {
        flex: 1,
    },
    content: {
        fontSize: 16,
        width: 280,
    },
    likeImage: {
        width: 18,
        height: 18,
    },
    likeText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    like: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
});

export default CommentView;

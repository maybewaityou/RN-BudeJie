import React, { Component } from 'react';
import Color from '../../../../constant/Color';
import Cell from '../../cell/Cell';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    RefreshControl
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
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <LazyloadView
                host='commentList'
                style={{ backgroundColor: 'white' }}
            >
                <Text>
                    {rowData.user.username}
                </Text>
            </LazyloadView>
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
    eparators: {
        backgroundColor: Color.defaultBackgroundColor,
        height: 10,
    }
});

export default CommentView;

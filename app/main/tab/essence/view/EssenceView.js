/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../../../styles/Main';
import Color from '../../../constant/Color';
import TpoicType from '../../common/cell/TopicType';
import Cell from '../../common/cell/Cell';
import {
    View,
    Text,
    ListView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import {
    LazyloadListView,
    LazyloadView
} from 'react-native-lazyload';

class EssenceView extends React.Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.renderRefreshControl = this.renderRefreshControl.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    renderRow(rowData) {
        return (
            <LazyloadView host='list' >
                <Cell
                    width={this.props.width}
                    rowData={rowData}
                    handleCellPress={this.props.handleCellPress.bind(this, rowData)}
                    handleMorePress={this.props.handleMorePress.bind(this, rowData)}
                    showBigPicture={this.props.showBigPicture.bind(this, rowData)}
                    startVideo={this.props.startVideo.bind(this, rowData)}
                    startVoice={this.props.startVoice.bind(this, rowData)}
                    handleDingPress={this.props.handleDingPress.bind(this, rowData)}
                    handleCaiPress={this.props.handleCaiPress.bind(this, rowData)}
                    handleSharePress={this.props.handleSharePress.bind(this, rowData)}
                    handleCommentPress={this.props.handleCommentPress.bind(this, rowData)}
                />
            </LazyloadView>
        );
    }

    renderRefreshControl() {
        return (
            <RefreshControl
                refreshing={this.props.isRefreshing}
                onRefresh={this.props.onRefresh}
                title="下拉刷新..."
            />
        );
    }

    renderFooter() {
        return (
            <LazyloadView
                host='list'
                style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}
            >
                <Text style={{ fontSize: 14 }}>
                    正在加载, 请稍后...
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
                    name='list'
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    refreshControl={this.renderRefreshControl()}
                    renderFooter={this.renderFooter}
                    initialListSize={this.props.dataList.length}
                    pageSize={20}
                    contentInset={{ bottom: 49 }}
                    style={{ width: this.props.width }}
                    onEndReachedThreshold={1}
                    onEndReached={this.props.onEndReached}
                />
            </View>
        );
    }
}

export default EssenceView;

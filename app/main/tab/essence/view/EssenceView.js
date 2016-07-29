/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Color from '../../../constant/Color';
import TpoicType from '../../common/cell/TopicType';
import CellTopView from '../../common/cell/CellTopView';
import CellCenterView from '../../common/cell/CellCenterView';
import CellHotCommentView from '../../common/cell/CellHotCommentView';
import CellBottomView from '../../common/cell/CellBottomView';
import {
    View,
    Text,
    Image,
    ListView
} from 'react-native';

class EssenceView extends React.Component {
    constructor(props) {
        super(props);

        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        console.log('this.props.dataList======', this.props.dataList);

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.dataList)
        };

        this.renderRow = this.renderRow.bind(this);
        this.renderSeparator = this.renderSeparator.bind(this);
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={rowID}
                style={{ backgroundColor: Color.defaultBackgroundColor, width: this.props.width, height: 10 }}
            />
        );
    }

    renderRow(rowData) {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <CellTopView
                    data={rowData}
                    width={this.props.width}
                    onPress={this.props.handleMorePress.bind(this, rowData)}
                />
                <CellCenterView
                    data={rowData}
                    width={this.props.width}
                    showBigPicture={this.props.showBigPicture.bind(this, rowData)}
                    startVideo={this.props.startVideo.bind(this, rowData)}
                    startVoice={this.props.startVoice.bind(this, rowData)}
                />
                <CellHotCommentView
                    data={rowData}
                    width={this.props.width}
                />
                <CellBottomView
                    data={rowData}
                    width={this.props.width}
                    handleDingPress={this.props.handleDingPress.bind(this, rowData)}
                    handleCaiPress={this.props.handleCaiPress.bind(this, rowData)}
                    handleSharePress={this.props.handleSharePress.bind(this, rowData)}
                    handleCommentPress={this.props.handleCommentPress.bind(this, rowData)}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    initialListSize={this.props.dataList.size}
                    pageSize={20}
                    contentInset={{ bottom: 49 }}
                    style={{ width: this.props.width }}
                />
            </View>
        );
    }
}

export default EssenceView;

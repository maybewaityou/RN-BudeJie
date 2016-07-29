/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Color from '../../../constant/Color';
import CellTopView from '../../common/cell/CellTopView';
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
                style={{ backgroundColor: Color.defaultBackgroundColor, width: this.props.width, height: 20 }}
            />
        );
    }

    renderRow(rowData) {
        return (
            <CellTopView
                data={rowData}
                width={this.props.width}
            />
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

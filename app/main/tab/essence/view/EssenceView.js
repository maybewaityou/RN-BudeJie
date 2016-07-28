/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Color from '../../../constant/Color';
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

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.dataList)
        };

        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(rowData) {
        return (
            <Text>
                Test
            </Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentInset={{ bottom: 49 }}
                    style={{ width: this.props.width }}
                />
            </View>
        );
    }
}

export default EssenceView;

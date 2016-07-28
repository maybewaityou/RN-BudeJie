/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Color from '../../../constant/Color';
import Button from '../../../components/Button';
import {
    View,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

class MineView extends React.Component {
    constructor(props) {
        super(props);

        const data = [
            {
                image: Images.random,
                title: '登录/注册'
            },
            {
                title: '离线下载'
            }
        ];

        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(data)
        };

        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center',  width: this.props.width, height: 44, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: Color.defaultColor }}
                    onPress={this.props.onItemPress.bind(this, rowData)}
                >
                    {
                        rowData.image ? <Image source={{uri: rowData.image}} style={{ marginLeft: 10, width: 33, height: 33 }} /> : <View />
                    }
                    <Text style={[styles.commonText, { fontSize: 16, marginLeft: 10 }]}>
                        {rowData.title}
                    </Text>
                </TouchableOpacity>
                <View
                    style={{ marginTop: 20 }}
                />
            </View>
        );
    }

    renderFooter() {
        if (this.props.squareList) {
            const maxColumns = 4;
            const width = this.props.width / maxColumns;
            const height = width;
            return (
                <ScrollView
                    style={{ backgroundColor: 'white' }}
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    {this.props.squareList.map(rowData => {
                        return (
                            <Button
                                key={rowData.id}
                                isVertical={true}
                                title={rowData.name}
                                leftImage={rowData.icon}
                                highlightLeftImage={rowData.icon}
                                leftImageStyle={{ width: 44, height: 44 }}
                                highlightTitleColor='red'
                                titleStyle={{ fontSize: 16 }}
                                style={{ width: width, height: height, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: Color.defaultColor }}
                                onPress={this.props.onFooterItemPress.bind(this, rowData)}
                            />
                        );
                    })}
                </ScrollView>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }
}

export default MineView;

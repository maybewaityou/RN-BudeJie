import React, { Component } from 'react';
import Color from '../../../constant/Color';
import CellTopView from './CellTopView';
import CellCenterView from './CellCenterView';
import CellHotCommentView from './CellHotCommentView';
import CellBottomView from './CellBottomView';
import {
    TouchableOpacity,
    View
} from 'react-native';

class Cell extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{ backgroundColor: 'white', overflow:'hidden' }}
                onPress={this.props.handleCellPress}
            >
                <CellTopView
                    data={this.props.rowData}
                    width={this.props.width}
                    onPress={this.props.handleMorePress}
                />
                <CellCenterView
                    data={this.props.rowData}
                    width={this.props.width}
                    showBigPicture={this.props.showBigPicture}
                    startVideo={this.props.startVideo}
                    startVoice={this.props.startVoice}
                />
                <CellHotCommentView
                    data={this.props.rowData}
                    width={this.props.width}
                />
                <CellBottomView
                    data={this.props.rowData}
                    width={this.props.width}
                    handleDingPress={this.props.handleDingPress}
                    handleCaiPress={this.props.handleCaiPress}
                    handleSharePress={this.props.handleSharePress}
                    handleCommentPress={this.props.handleCommentPress}
                />
                <View style={{ backgroundColor: Color.defaultBackgroundColor, width: this.props.width, height: 10 }} />
            </TouchableOpacity>
        );
    }
}

export default Cell;

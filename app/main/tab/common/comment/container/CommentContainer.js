import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData, refreshData } from '../../../../../framework/redux/actions/Actions';
import { TOPIC_COMMENT } from '../../../../../framework/redux/actions/ActionsType';
import Dimensions from 'Dimensions';
import CommentView from '../view/CommentView';
import Cell from '../../cell/Cell';

const { width } = Dimensions.get('window');

class CommentContainer extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData(`a=dataList&c=comment&hot=1&data_id=${this.props.data.id}`, TOPIC_COMMENT));
    }

    render() {
        const { dispatch, dataList, hotList, total } = this.props;
        if (dataList.length === 0) {
            return (
                <Cell
                    rowData={this.props.data}
                    width={width}
                />
            );
        }
        return (
            <CommentView
                data={this.props.data}
                dataList={dataList}
                hotList={hotList}
                total={total}
                width={width}
                handleMorePress={(rowData) => {
                    console.log('=====>>>>> handleMorePress', rowData);
                }}
                showBigPicture={(rowData) => {
                    console.log('=====>>>>> showBigPicture', rowData);
                }}
                startVideo={(rowData) => {
                    console.log('=====>>>>> startVideo', rowData);
                }}
                startVoice={(rowData) => {
                    console.log('=====>>>>> startVoice', rowData);
                }}
                handleDingPress={(rowData) => {
                    console.log('=====>>>>> handleDingPress', rowData);
                }}
                handleCaiPress={(rowData) => {
                    console.log('=====>>>>> handleCaiPress', rowData);
                }}
                handleSharePress={(rowData) => {
                    console.log('=====>>>>> handleSharePress', rowData);
                }}
                handleCommentPress={(rowData) => {
                    console.log('=====>>>>> handleCommentPress', rowData);
                }}
            />
        );
    }
}

CommentContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    dataList: PropTypes.array,
    hotList: PropTypes.array,
    total: PropTypes.string
};

function mapStateToProps(state) {
    const { networkReducer } = state;
    return {
        dataList: networkReducer.commentData.data,
        hotList: networkReducer.commentData.hot,
        total:  networkReducer.commentData.total
    };
}

export default connect(mapStateToProps)(CommentContainer);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../../../../framework/redux/actions';
import Dimensions from 'Dimensions';
import CommentView from '../view/CommentView';

const { width } = Dimensions.get('window');

class CommentContainer extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData());
    }

    render() {
        return (
            <CommentView
                data={this.props.data}
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

};

function mapStateToProps(state) {
    const { networkReducer } = state;
    return {

    };
}

export default connect(mapStateToProps)(CommentContainer);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';
import CommentView from '../view/CommentView';

const { width } = Dimensions.get('window');

class CommentContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <CommentView
                data={this.props.data}
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

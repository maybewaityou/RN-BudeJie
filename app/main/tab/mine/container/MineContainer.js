/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../../../framework/redux/actions/Actions';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import MineView from '../view/MineView';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

class MineContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData('a=square&c=topic'));
    }

    onItemPress(rowData, event) {
        console.log('== item ==>>> ', rowData);
    }

    onFooterItemPress(rowData, event) {
        console.log('== footer rowData ==>>> ', rowData);
    }

    render() {
        const { dispatch, responseData } = this.props;
        return (
            <MineView
                width={width}
                squareList={responseData.square_list}
                onItemPress={this.onItemPress}
                onFooterItemPress={this.onFooterItemPress}
            />
        );
    }
}

MineContainer.propTypes = {
    responseData: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { networkReducer } = state;
    return {
        responseData: networkReducer.responseData
    };
}

export default connect(mapStateToProps)(MineContainer);

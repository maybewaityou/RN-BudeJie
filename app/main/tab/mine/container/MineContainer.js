/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modal, dismiss, weatherCanFocus, fetchData } from '../../../../framework/redux/actions/Actions';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import MineView from '../view/MineView';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

class MineContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onItemPress = this.onItemPress.bind(this);
        this.onFooterItemPress = this.onFooterItemPress.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData('a=square&c=topic'));
    }

    onItemPress(rowData, event) {
        console.log('== item ==>>> ', rowData);
        const { dispatch, modalVisible } = this.props;
        if (rowData.type === 'login') {
            dispatch(modal(!modalVisible));
        }
    }

    onFooterItemPress(rowData, event) {
        console.log('== footer rowData ==>>> ', rowData);
        
    }

    render() {
        const { dispatch, responseData, modalVisible, canFocus } = this.props;
        return (
            <MineView
                width={width}
                squareList={responseData.square_list}
                modalVisible={modalVisible}
                canFocus={canFocus}
                onItemPress={this.onItemPress}
                onFooterItemPress={this.onFooterItemPress}
                onShow={() => {
                    dispatch(weatherCanFocus(canFocus));
                }}
            />
        );
    }
}

MineContainer.propTypes = {
    responseData: PropTypes.object,
    modalVisible: PropTypes.bool,
    canFocus: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { networkReducer, friendTrendsReducer, loginReducer } = state;
    return {
        responseData: networkReducer.responseData,
        modalVisible: friendTrendsReducer.modalVisible,
        canFocus: loginReducer.canFocus
    };
}

export default connect(mapStateToProps)(MineContainer);

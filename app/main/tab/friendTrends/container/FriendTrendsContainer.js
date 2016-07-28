/* jshint esversion: 6 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { modal, dismiss, weatherCanFocus } from '../../../../framework/redux/actions/Actions';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import FriendTrendsView from '../view/FriendTrendsView';

class FriendTrendsContainer extends React.Component {
    render() {
        const { dispatch, modalVisible, canFocus } = this.props;
        return (
            <FriendTrendsView
                modalVisible={modalVisible}
                canFocus={canFocus}
                onShow={() => {
                    dispatch(weatherCanFocus(canFocus));
                }}
                loginOrRegister={() => {
                    dispatch(modal(!modalVisible));
                }}
            />
        );
    }
}

FriendTrendsContainer.propTypes = {
    modalVisible: PropTypes.bool,
    canFocus: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { friendTrendsReducer, loginReducer } = state;
    return {
        modalVisible: friendTrendsReducer.modalVisible,
        canFocus: loginReducer.canFocus
    };
}

export default connect(mapStateToProps)(FriendTrendsContainer);

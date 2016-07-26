/* jshint esversion: 6 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { modal, dismiss, weatherCanFocus } from '../../../../framework/redux/actions/Actions';
import { MODAL, DISMISS, CAN_FOCUS } from '../../../../framework/redux/actions/ActionsType';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleFriendTrendsLeftComponent, BackButtonComponent, TitleBarFriendTrendsComponent } from '../../../components/title/Title';
import FriendTrendsView from '../view/FriendTrendsView';

class FriendTrendsContainer extends React.Component {

    initFriendTrendsView() {
        const { dispatch, modalVisible, canFocus } = this.props;
        return (
            <FriendTrendsView
                animationType='slide'
                transparent={false}
                modalVisible={modalVisible}
                canFocus={canFocus}
                handleOnShow={() => {
                    dispatch(weatherCanFocus(canFocus));
                }}
                loginOrRegister={() => {
                    dispatch(modal(!modalVisible));
                }}
                dismiss={() => {
                    dispatch(dismiss(!modalVisible));
                }}
            />
        );
    }

    render() {
        return (
            <Router
                route={this.initFriendTrendsView.bind(this)}
                backButtonComponent={BackButtonComponent}
                leftBarComponent={TitleFriendTrendsLeftComponent}
                titleBarComponent={TitleBarFriendTrendsComponent}
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

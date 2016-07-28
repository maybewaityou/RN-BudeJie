/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modal, dismiss, weatherCanFocus, fetchData } from '../../../../framework/redux/actions/Actions';
import Dimensions from 'Dimensions';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import { TitleBarTextComponent, BackButtonComponent } from '../../../components/title/Title';
import MineView from '../view/MineView';
import WebViewComponent from '../../common/WebViewComponent';

const { width, height } = Dimensions.get('window');

class MineContainer extends React.Component {
    constructor(props) {
        super(props);

        this.backButtonComponent = this.backButtonComponent.bind(this);
        this.onItemPress = this.onItemPress.bind(this);
        this.onFooterItemPress = this.onFooterItemPress.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData('a=square&c=topic'));
    }

    backButtonComponent() {
        return (
            <BackButtonComponent
                onPress={() => {
                    this.props.toBack();
                }}
            />
        );
    }

    onItemPress(rowData, event) {
        const { dispatch, modalVisible } = this.props;
        if (rowData.type === 'login') {
            dispatch(modal(!modalVisible));
        } else if (rowData.type === 'download_offline') {
            console.log('== item ==>>> download_offline');
        }
    }

    onFooterItemPress(rowData, event) {
        console.log('== footer rowData ==>>> ', rowData);
        this.props.toRoute({
            component: WebViewComponent,
            titleComponent: TitleBarTextComponent,
            titleProps: {
                title: rowData.name
            },
            data: rowData.url,
            leftCorner: this.backButtonComponent
        });
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

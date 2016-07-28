/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../../../framework/redux/actions/Actions';
import Dimensions from 'Dimensions';
import styles from '../../../../styles/Main';
import { BackButtonComponent } from '../../../components/title/Title';
import EssenceView from '../view/EssenceView';
import {
    View
} from 'react-native';

const { width, height } = Dimensions.get('window');

class EssenceContainer extends React.Component {
    constructor(props) {
        super(props);

        this.backButtonComponent = this.backButtonComponent.bind(this);
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

    render() {
        const { dispatch, dataList } = this.props;
        if (!dataList) {
            return (<View/>);
        }
        return (
            <EssenceView
                width={width}
                dataList={dataList}
                onPress={() => {
                    this.props.toRoute({
                        component: HelloPage,
                        leftCorner: this.backButtonComponent
                    });
                }}
            />
        );
    }
}

EssenceContainer.propTypes = {
    dataList: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { networkReducer } = state;
    return {
        dataList: networkReducer.responseData.square_list
    };
}

export default connect(mapStateToProps)(EssenceContainer);

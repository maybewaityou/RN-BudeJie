/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { goToTag } from '../../../../framework/redux/actions/Actions';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleTagLeftComponent, BackButtonComponent, TitleImageComponent } from '../../../components/title/Title';
import EssenceView from '../view/EssenceView';

class EssenceContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    leftBarComponent() {
        const { dispatch } = this.props;
        return (
            <TitleTagLeftComponent
                onPress={() => {
                    dispatch(goToTag());
                }}
            />
        );
    }

    render() {
        return (
            <Router
                route={EssenceView}
                backButtonComponent={BackButtonComponent}
                leftBarComponent={this.leftBarComponent.bind(this)}
                titleBarComponent={TitleImageComponent}
            />
        );
    }
}

EssenceContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { essenceReducer } = state;
    return {

    };
}

export default connect(mapStateToProps)(EssenceContainer);

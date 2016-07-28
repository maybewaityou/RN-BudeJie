/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../../../../styles/Main';
import { BackButtonComponent } from '../../../components/title/Title';
import EssenceView from '../view/EssenceView';

import HelloPage from '../../../../example/router/components/HelloPage';

class EssenceContainer extends React.Component {
    constructor(props) {
        super(props);

        this.backButtonComponent = this.backButtonComponent.bind(this);
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
        return (
            <EssenceView
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
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { essenceAndNewReducer } = state;
    return {

    };
}

export default connect(mapStateToProps)(EssenceContainer);

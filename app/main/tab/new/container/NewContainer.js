/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import NewView from '../view/NewView';

class NewContainer extends React.Component {
    render() {
        return (
            <NewView />
        );
    }
}

NewContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { essenceAndNewReducer } = state;
    return {

    };
}

export default connect(mapStateToProps)(NewContainer);

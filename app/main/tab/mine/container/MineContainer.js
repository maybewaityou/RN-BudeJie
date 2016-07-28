/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import MineView from '../view/MineView';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

class MineContainer extends React.Component {
    render() {
        const { dispatch } = this.props;
        return (
            <MineView
                width={width}
            />
        );
    }
}

MineContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { essenceAndNewReducer } = state;
    return {

    };
}

export default connect(mapStateToProps)(MineContainer);

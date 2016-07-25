/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import FriendTrendsView from '../view/FriendTrendsView';

class FriendTrendsContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <FriendTrendsView />
        );
    }
}

export default FriendTrendsContainer;

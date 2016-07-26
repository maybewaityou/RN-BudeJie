/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleFriendTrendsLeftComponent, BackButtonComponent, TitleBarNewComponent } from '../../../components/title/Title';
import FriendTrendsView from '../view/FriendTrendsView';

class FriendTrendsContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router
                route={FriendTrendsView}
                backButtonComponent={BackButtonComponent}
                leftBarComponent={TitleFriendTrendsLeftComponent}
                titleBarComponent={TitleBarNewComponent}
            />
        );
    }
}

export default FriendTrendsContainer;

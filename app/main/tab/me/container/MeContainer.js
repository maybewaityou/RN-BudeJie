/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleTagLeftComponent, BackButtonComponent, TitleBarMeComponent } from '../../../components/title/Title';
import MeView from '../view/MeView';

class MeContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router
                route={MeView}
                backButtonComponent={BackButtonComponent}
                titleBarComponent={TitleBarMeComponent}
            />
        );
    }
}

export default MeContainer;

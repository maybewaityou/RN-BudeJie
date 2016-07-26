/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import Router from '../../../components/Router';
import { TitleTagLeftComponent, BackButtonComponent, TitleBarTextComponent } from '../../../components/title/Title';
import MeView from '../view/MeView';

class MeContainer extends React.Component {

    titleBarComponent() {
        return (
            <TitleBarTextComponent title={LocalString.titleBarMe} />
        );
    }

    render() {
        return (
            <Router
                route={MeView}
                backButtonComponent={BackButtonComponent}
                titleBarComponent={this.titleBarComponent.bind(this)}
            />
        );
    }
}

export default MeContainer;

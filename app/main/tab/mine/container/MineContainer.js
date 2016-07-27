/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import LocalString from '../../../constant/LocalString';
import Router from '../../../components/Router';
import { BackButtonComponent, TitleBarTextComponent, MineRightBarComponent } from '../../../components/title/Title';
import MineView from '../view/MineView';

class MeContainer extends React.Component {

    titleBarComponent() {
        return (
            <TitleBarTextComponent title={LocalString.titleBarMine} />
        );
    }

    render() {
        return (
            <Router
                route={MineView}
                backButtonComponent={BackButtonComponent}
                titleBarComponent={this.titleBarComponent.bind(this)}
                rightBarComponent={MineRightBarComponent}
            />
        );
    }
}

export default MeContainer;

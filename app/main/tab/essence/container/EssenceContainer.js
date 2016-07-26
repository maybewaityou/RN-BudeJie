/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleTagLeftComponent, BackButtonComponent, TitleImageComponent } from '../../../components/title/Title';
import EssenceView from '../view/EssenceView';

class EssenceContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    leftBarComponent() {
        return (
            <TitleTagLeftComponent
                onPress={() => {
                    
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

export default EssenceContainer;

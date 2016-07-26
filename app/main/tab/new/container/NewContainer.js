/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleTagLeftComponent, BackButtonComponent, TitleBarNewComponent } from '../../../components/title/Title';
import NewView from '../view/NewView';

class NewContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router
                route={NewView}
                backButtonComponent={BackButtonComponent}
                leftBarComponent={TitleTagLeftComponent}
                titleBarComponent={TitleBarNewComponent}
            />
        );
    }
}

export default NewContainer;

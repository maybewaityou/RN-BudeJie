/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import NewView from '../view/NewView';

class NewContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <NewView />
        );
    }
}

export default NewContainer;

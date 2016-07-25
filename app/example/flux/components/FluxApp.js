/* jshint esversion: 6 */

import React, {Component} from 'react';
import Store from '../stores/Stores';
import Actions from '../actions/Actions';
import MainSection from './MainSection';

function getItem() {
    return {
        item: Store.getPayload().item,
    };
}

class FluxApp extends Component {
    constructor(props) {
        super(props);
        
        this.state = getItem();
    }

    _onChange() {
        this.setState(getItem());
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <MainSection item={this.state.item}/>
        );
    }
}

export default FluxApp;

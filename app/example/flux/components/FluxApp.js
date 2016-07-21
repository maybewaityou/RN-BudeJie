/* jshint esversion: 6 */

import React, {Component} from 'react';
import Store from '../stores/Stores';
import Actions from '../actions/Actions';
import MainSection from './MainSection';

function getTodoState() {
    return {
        allTodos: Store.getAll(),
    };
}

class FluxApp extends Component {
    constructor(props) {
        super(props);
        Actions.create('Hello');
        this.state = getTodoState();
    }

    _onChange() {
        this.setState(getTodoState());
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <MainSection allTodos={this.state.allTodos}/>
        );
    }
}

export default FluxApp;

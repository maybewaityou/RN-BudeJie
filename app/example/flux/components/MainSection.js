/* jshint esversion: 6 */
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, {Component} from 'react';
import Actions from '../actions/Actions';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

var count = 0;

class MainSection extends Component {
    constructor(props) {
        super(props);

    }

    onClick(event) {
        count += 1;
        Actions.updateText(0, `Hello World~~ ${count}`);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TouchableHighlight onPress={this.onClick.bind(this)}>
                    <Text>updateText</Text>
                </TouchableHighlight>
                <Text style={{fontSize: 18}}>
                    {this.props.allTodos[0].text}
                </Text>
            </View>
        );
    }
}

export default MainSection;

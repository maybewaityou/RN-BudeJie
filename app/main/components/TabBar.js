/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../styles/Main';
import Color from '../constant/Constant';
import {
    TabBarIOS,
    View,
    Text
} from 'react-native';

class TabBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabBarIOS
                barTintColor={Color.tabBarBackgroundColor}
                tintColor={Color.tabBarSelectedColor}
                translucent={true}
                >
                <TabBarIOS.Item
                    
                    >

                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

export default TabBar;

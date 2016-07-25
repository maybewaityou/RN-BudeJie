/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../styles/Main';
import Color from '../constant/Color';
import Images from '../constant/Images';
import LocalString from '../constant/LocalString';

import EssenceContainer from '../tab/essence/container/EssenceContainer';
import {
    TabBarIOS,
    View,
    Text
} from 'react-native';

class TabBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'essence'
        };
    }

    render() {
        return (
            <TabBarIOS
                barTintColor={Color.tabBarBackgroundColor}
                tintColor={Color.tabBarSelectedColor}
                translucent={true}
                >
                <TabBarIOS.Item
                    title={LocalString.tabBarEssence}
                    icon={Images.tabBarEssenceIcon}
                    selectedIcon={Images.tabBarEssenceSelectedIcon}
                    selected={this.state.selectedTab === 'essence'}
                    onPress={() => {
                        this.setState({ selectedTab: 'essence' });
                    }}
                >
                    <EssenceContainer />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

export default TabBar;

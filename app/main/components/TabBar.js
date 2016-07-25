/* jshint esversion: 6 */

import React, { Component } from 'react';
import styles from '../../styles/Main';
import Color from '../constant/Color';
import Images from '../constant/Images';
import LocalString from '../constant/LocalString';
import EssenceContainer from '../tab/essence/container/EssenceContainer';
import FriendTrendsContainer from '../tab/friendTrends/container/FriendTrendsContainer';
import MeContainer from '../tab/me/container/MeContainer';
import NewContainer from '../tab/new/container/NewContainer';
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
                tintColor={Color.tabBarSelectedColor}
                translucent={true}
                >
                {/* 精华 */}
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

                {/* 新帖 */}
                <TabBarIOS.Item
                    title={LocalString.tabBarNew}
                    icon={Images.tabBarNewIcon}
                    selectedIcon={Images.tabBarNewSelectedIcon}
                    selected={this.state.selectedTab === 'new'}
                    onPress={() => {
                        this.setState({ selectedTab: 'new' });
                    }}
                >
                    <NewContainer />
                </TabBarIOS.Item>

                {/* 关注 */}
                <TabBarIOS.Item
                    title={LocalString.tabBarFriendTrends}
                    icon={Images.tabBarFriendTrendsIcon}
                    selectedIcon={Images.tabBarFriendTrendsSelectedIcon}
                    selected={this.state.selectedTab === 'friendTrends'}
                    onPress={() => {
                        this.setState({ selectedTab: 'friendTrends' });
                    }}
                >
                    <FriendTrendsContainer />
                </TabBarIOS.Item>

                {/* 我 */}
                <TabBarIOS.Item
                    title={LocalString.tabBarMe}
                    icon={Images.tabBarMeIcon}
                    selectedIcon={Images.tabBarMeSelectedIcon}
                    selected={this.state.selectedTab === 'me'}
                    onPress={() => {
                        this.setState({ selectedTab: 'me' });
                    }}
                >
                    <MeContainer />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

export default TabBar;

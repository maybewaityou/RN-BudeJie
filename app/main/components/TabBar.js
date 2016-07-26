/* jshint esversion: 6 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../framework/redux/store/Store';
import styles from '../../styles/Main';
import Constant from '../constant/Constant';
import Color from '../constant/Color';
import Images from '../constant/Images';
import LocalString from '../constant/LocalString';
import EssenceContainer from '../tab/essence/container/EssenceContainer';
import FriendTrendsContainer from '../tab/friendTrends/container/FriendTrendsContainer';
import MeContainer from '../tab/me/container/MeContainer';
import NewContainer from '../tab/new/container/NewContainer';
import {
    TabBarIOS
} from 'react-native';

var store = configureStore();

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
                    icon={{ uri: Images.tabBarEssenceIcon, scale: Constant.tabBarDefaultScale }}
                    selectedIcon={{ uri: Images.tabBarEssenceSelectedIcon, scale: Constant.tabBarDefaultScale }}
                    selected={this.state.selectedTab === 'essence'}
                    onPress={() => {
                        this.setState({ selectedTab: 'essence' });
                    }}
                >
                    <Provider store={store}>
                        <EssenceContainer />
                    </Provider>
                </TabBarIOS.Item>

                {/* 新帖 */}
                <TabBarIOS.Item
                    title={LocalString.tabBarNew}
                    icon={{ uri: Images.tabBarNewIcon, scale: Constant.tabBarDefaultScale }}
                    selectedIcon={{ uri: Images.tabBarNewSelectedIcon, scale: Constant.tabBarDefaultScale }}
                    selected={this.state.selectedTab === 'new'}
                    onPress={() => {
                        this.setState({ selectedTab: 'new' });
                    }}
                >
                    <Provider store={store}>
                        <NewContainer />
                    </Provider>
                </TabBarIOS.Item>

                {/* 关注 */}
                <TabBarIOS.Item
                    title={LocalString.tabBarFriendTrends}
                    icon={{ uri: Images.tabBarFriendTrendsIcon, scale: Constant.tabBarDefaultScale }}
                    selectedIcon={{ uri: Images.tabBarFriendTrendsSelectedIcon, scale: Constant.tabBarDefaultScale }}
                    selected={this.state.selectedTab === 'friendTrends'}
                    onPress={() => {
                        this.setState({ selectedTab: 'friendTrends' });
                    }}
                >
                    <Provider store={store}>
                        <FriendTrendsContainer />
                    </Provider>
                </TabBarIOS.Item>

                {/* 我 */}
                <TabBarIOS.Item
                    title={LocalString.tabBarMe}
                    icon={{ uri: Images.tabBarMeIcon, scale: Constant.tabBarDefaultScale }}
                    selectedIcon={{ uri: Images.tabBarMeSelectedIcon, scale: Constant.tabBarDefaultScale }}
                    selected={this.state.selectedTab === 'me'}
                    onPress={() => {
                        this.setState({ selectedTab: 'me' });
                    }}
                >
                    <Provider store={store}>
                        <MeContainer />
                    </Provider>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

export default TabBar;

/* jshint esversion: 6 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../framework/redux/store/Store';
import Constant from '../constant/Constant';
import Color from '../constant/Color';
import Images from '../constant/Images';
import LocalString from '../constant/LocalString';
import Router from '../../main/components/Router';
import { TitleTagLeftComponent, TitleFriendTrendsLeftComponent, TitleImageComponent, TitleBarTextComponent, MineRightBarComponent } from '../../main/components/title/Title';
import EssenceContainer from '../tab/essence/container/EssenceContainer';
import FriendTrendsContainer from '../tab/friendTrends/container/FriendTrendsContainer';
import MineContainer from '../tab/mine/container/MineContainer';
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

        this.confitTabItem = this.confitTabItem.bind(this);
        this.goToTag = this.goToTag.bind(this);
        this.goToFollow = this.goToFollow.bind(this);
        this.goToSetting = this.goToSetting.bind(this);
    }

    confitTabItem(tabBarItemConfig, routerConfig) {
        return (
            <TabBarIOS.Item
                title={tabBarItemConfig.title}
                icon={{ uri: tabBarItemConfig.icon, scale: Constant.tabBarDefaultScale }}
                selectedIcon={{ uri: tabBarItemConfig.selectedIcon, scale: Constant.tabBarDefaultScale }}
                selected={this.state.selectedTab === tabBarItemConfig.selected}
                onPress={() => {
                    this.setState({ selectedTab: tabBarItemConfig.selected });
                }}
            >
                <Provider store={store}>
                    <Router
                        route={routerConfig.route}
                        leftBarComponent={routerConfig.leftBarComponent}
                        leftBarComponentProps={routerConfig.leftBarComponentProps}
                        titleBarComponent={routerConfig.titleBarComponent}
                        titleProps={routerConfig.titleProps}
                        rightBarComponent={routerConfig.rightBarComponent}
                        rightBarComponentProps={routerConfig.rightBarComponentProps}
                    />
                </Provider>
            </TabBarIOS.Item>
        );
    }

    goToTag() {
        // TODO goToTag

    }

    goToFollow() {
        // TODO goToFollow

    }

    goToSetting() {
        // TODO goToSetting

    }

    render() {
        return (
            <TabBarIOS
                tintColor={Color.tabBarSelectedColor}
                translucent={true}
            >

                {/* 精华 */}
                {this.confitTabItem({
                    title: LocalString.tabBarEssence,
                    icon: Images.tabBarEssenceIcon,
                    selectedIcon: Images.tabBarEssenceSelectedIcon,
                    selected: 'essence'
                }, {
                    route: EssenceContainer,
                    leftBarComponent: TitleTagLeftComponent,
                    leftBarComponentProps: {
                        onPress: this.goToTag,
                    },
                    titleBarComponent: TitleImageComponent,
                    titleProps: {
                        title: LocalString.tabBarEssence
                    }
                })}


                {/* 新帖 */}
                {this.confitTabItem({
                    title: LocalString.tabBarNew,
                    icon: Images.tabBarNewIcon,
                    selectedIcon: Images.tabBarNewSelectedIcon,
                    selected: 'new'
                }, {
                    route: NewContainer,
                    leftBarComponent: TitleTagLeftComponent,
                    leftBarComponentProps: {
                        onPress: this.goToTag,
                    },
                    titleBarComponent: TitleBarTextComponent,
                    titleProps: {
                        title: LocalString.tabBarNew
                    }
                })}

                {/* 关注 */}
                {this.confitTabItem({
                    title: LocalString.tabBarFriendTrends,
                    icon: Images.tabBarFriendTrendsIcon,
                    selectedIcon: Images.tabBarFriendTrendsSelectedIcon,
                    selected: 'friendTrends'
                }, {
                    route: FriendTrendsContainer,
                    leftBarComponent: TitleFriendTrendsLeftComponent,
                    leftBarComponentProps: {
                        onPress: this.goToFollow
                    },
                    titleBarComponent: TitleBarTextComponent,
                    titleProps: {
                        title: LocalString.titleBarFriendTrends
                    }
                })}

                {/* 我 */}
                {this.confitTabItem({
                    title: LocalString.tabBarMine,
                    icon: Images.tabBarMeIcon,
                    selectedIcon: Images.tabBarMeSelectedIcon,
                    selected: 'mine'
                }, {
                    route: MineContainer,
                    titleBarComponent: TitleBarTextComponent,
                    titleProps: {
                        title: LocalString.titleBarMine
                    },
                    rightBarComponent: MineRightBarComponent,
                    rightBarComponentProps: {
                        onMoonPress: () => {
                            console.log('======>>>>> onMoonPress');
                        },
                        onSettingPress: this.goToSetting
                    }
                })}

            </TabBarIOS>
        );
    }
}

export default TabBar;

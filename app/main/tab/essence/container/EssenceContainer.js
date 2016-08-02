import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData, refreshData } from '../../../../framework/redux/actions/Actions';
import { TOPIC_ALL_REFRESH, TOPIC_ALL_LOAD_MORE } from '../../../../framework/redux/actions/ActionsType';
import Dimensions from 'Dimensions';
import LoadingView from '../../../components/LoadingView';
import { BackButtonComponent, TitleBarTextComponent } from '../../../components/title/Title';
import EssenceView from '../view/EssenceView';
import TopicType from '../../common/cell/TopicType';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CommentContainer from '../../common/comment/container/CommentContainer';
import {
    View,
    Text
} from 'react-native';

const { width } = Dimensions.get('window');

class EssenceContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(refreshData(`a=list&c=data&type=${TopicType.All}`, TOPIC_ALL_REFRESH));
    }

    render() {
        const { dispatch, dataList, dataInfo, isRefreshing } = this.props;
        if (dataList.length === 0) {
            return (
                <LoadingView />
            );
        }
        return (
            <ScrollableTabView
                style={{ backgroundColor: '#0000',  }}
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineColor='#E3483F'
                tabBarActiveTextColor='#E3483F'
                tabBarBackgroundColor='#0000'
                tabBarTextStyle={{ fontSize: 14 }}
                onChangeTab={(i, ref) => {
                    console.log('i == ', i);
                }}
            >
                <EssenceView
                    tabLabel='全部'
                    width={width}
                    dataList={dataList}
                    isRefreshing={isRefreshing}
                    handleMorePress={(rowData) => {
                        console.log('=====>>>>> handleMorePress', rowData);
                    }}
                    showBigPicture={(rowData) => {
                        console.log('=====>>>>> showBigPicture', rowData);
                    }}
                    startVideo={(rowData) => {
                        console.log('=====>>>>> startVideo', rowData);
                    }}
                    startVoice={(rowData) => {
                        console.log('=====>>>>> startVoice', rowData);
                    }}
                    handleDingPress={(rowData) => {
                        console.log('=====>>>>> handleDingPress', rowData);
                    }}
                    handleCaiPress={(rowData) => {
                        console.log('=====>>>>> handleCaiPress', rowData);
                    }}
                    handleSharePress={(rowData) => {
                        console.log('=====>>>>> handleSharePress', rowData);
                    }}
                    handleCommentPress={(rowData) => {
                        console.log('=====>>>>> handleCommentPress', rowData);
                    }}
                    handleCellPress={(rowData) => {
                        console.log('=====>>>>> handleCellPress', rowData);
                        this.props.toRoute({
                            component: CommentContainer,
                            passProps: {
                                data: rowData,
                            },
                            leftCorner: BackButtonComponent,
                            leftCornerProps: {
                                onPress: () => {
                                    this.props.toBack();
                                },
                            },
                            titleComponent: TitleBarTextComponent,
                            titleProps: {
                                title: '评论'
                            }
                        });
                    }}
                    onRefresh={() => {
                        dispatch(refreshData(`a=list&c=data&type=${TopicType.All}`, TOPIC_ALL_REFRESH));
                    }}
                    onEndReached={() => {
                        dispatch(fetchData(`a=list&c=data&type=${TopicType.All}&maxtime=${dataInfo.maxtime}`, TOPIC_ALL_LOAD_MORE));
                    }}
                />
                <Text tabLabel='视频'>我的</Text>
                <Text tabLabel='音频'>音频</Text>
                <Text tabLabel='图片'>图片</Text>
                <Text tabLabel='段子'>段子</Text>
            </ScrollableTabView>

        );
    }
}

EssenceContainer.propTypes = {
    dataList: PropTypes.array,
    dataInfo: PropTypes.object,
    isRefreshing: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { networkReducer } = state;
    return {
        dataList: networkReducer.topicAllList,
        dataInfo: networkReducer.topicInfo,
        isRefreshing: networkReducer.isRefreshing
    };
}

export default connect(mapStateToProps)(EssenceContainer);

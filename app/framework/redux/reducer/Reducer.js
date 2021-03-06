/* jshint esversion: 6 */

import { combineReducers } from 'redux';
import {
    GO_TO_TAG,
    GO_TO_FOLLOW,
    MODAL,
    DISMISS,
    CAN_FOCUS,
    LOGIN,
    QQ_LOGIN,
    SINA_LOGIN,
    TECENT_LOGIN,
    GO_TO_REGISTER,
    GO_TO_FORGET_PASSWORD,
    REGISTER,
    REQUESTING,
    RECEIVED,
    REFRESHING,
    REFRESHED,
    REQUEST_SQUARE,
    TOPIC_ALL_REFRESH,
    TOPIC_ALL_LOAD_MORE,
    TOPIC_PICTURE_REFRESH,
    TOPIC_PICTURE_LOAD_MORE,
    TOPIC_VIDEO_REFRESH,
    TOPIC_VIDEO_LOAD_MORE,
    TOPIC_VOICE_REFRESH,
    TOPIC_VOICE_LOAD_MORE,
    TOPIC_WORD_REFRESH,
    TOPIC_WORD_LOAD_MORE,
    TOPIC_COMMENT
} from '../actions/ActionsType';

function networkReducer(state = {
    url: '',
    isRequesting: false,
    squareList: [],
    topicAllList: [],
    topicInfo: {},
    isRefreshing: false,
    commentData: {
        data: [],
        hot: [],
        total: 0
    }
}, action) {
    switch (action.type) {
        case REQUESTING:
        case RECEIVED:
            return {
                ...state,
                url: action.payload.url,
                isRequesting: action.payload.isRequesting,
            };
        case REFRESHING:
        case REFRESHED:
            return {
                ...state,
                url: action.payload.url,
                isRefreshing: action.payload.isRefreshing,
            };
        case REQUEST_SQUARE:
            console.log('======>>>>> request_square');
            return {
                ...state,
                url: action.payload.url,
                squareList: action.payload.responseData.square_list
            }
        case TOPIC_ALL_REFRESH:
            console.log('======>>>>> topic_all_refresh');
            return {
                ...state,
                url: action.payload.url,
                topicAllList: action.payload.responseData.list,
                topicInfo: action.payload.responseData.info,
                isRefreshing: false
            }
        case TOPIC_ALL_LOAD_MORE:
            console.log('======>>>>> topic_all_load_more');
            return {
                ...state,
                url: action.payload.url,
                topicAllList: [...state.topicAllList, ...action.payload.responseData.list],
                topicInfo: action.payload.responseData.info
            }
        case TOPIC_COMMENT:
            console.log('======>>>>> topic_comment');
            return {
                ...state,
                url: action.payload.url,
                commentData: {
                    data: action.payload.responseData.data,
                    hot: action.payload.responseData.hot,
                    total: action.payload.responseData.total
                }
            }
        default:
            return state;
    }
}

function essenceAndNewReducer(state = {

}, action) {
    switch (action.type) {
        case GO_TO_TAG:
            console.log('======>>>>> goToTag');
            return {
                ...state
            };
        default:
            return state;
    }
}

function friendTrendsReducer(state = {
    modalVisible: false
}, action) {
    switch (action.type) {
        case GO_TO_FOLLOW:
            console.log('======>>>>> goToFollow');
            return {
                ...state
            };
        case MODAL:
            console.log('======>>>>> modal');
            return {
                ...state,
                modalVisible: action.payload.modalVisible
            };
        case DISMISS:
            console.log('======>>>>> dismiss');
            return {
                ...state,
                modalVisible: action.payload.modalVisible
            }
        default:
            return state;
    }
}

function mineReducer(state = {

}, action) {
    switch (action.type) {
        case '':

            return {
                ...state
            };
        default:
            return state;
    }
}

function loginReducer(state = {
    canFocus: true,
    userInfo: {}
}, action) {
    switch (action.type) {
        case CAN_FOCUS:
            console.log('======>>>>> canFocus');
            return {
                ...state,
                canFocus: action.payload.canFocus
            };
        case LOGIN:
            console.log('======>>>>> login');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case QQ_LOGIN:
            console.log('======>>>>> qqLogin');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case SINA_LOGIN:
            console.log('======>>>>> sinaLogin');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case TECENT_LOGIN:
            console.log('======>>>>> tecentLogin');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case GO_TO_REGISTER:
            console.log('======>>>>> goToRegister');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case GO_TO_FORGET_PASSWORD:
            console.log('======>>>>> goToForgetPassword');
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    networkReducer,
    essenceAndNewReducer,
    friendTrendsReducer,
    mineReducer,
    loginReducer
});

export default rootReducer;

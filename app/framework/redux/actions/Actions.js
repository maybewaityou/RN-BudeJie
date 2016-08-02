/* jshint esversion: 6 */
'use strict';

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
    REQUEST_SQUARE,
    REQUESTING,
    RECEIVED,
    REFRESHING,
    REFRESHED,
    TOPIC_COMMENT
} from './ActionsType';

/* ============================= Action Creator Start =============================== */
function requesting(url) {
    return {
        type: REQUESTING,
        payload: {
            url: url,
            isRequesting: true
        }
    };
}

function received(url) {
    return {
        type: RECEIVED,
        payload: {
            url: url,
            isRequesting: false
        }
    };
}

function receiveData(url, type, responseData) {
    return {
        type: type,
        payload: {
            url: url,
            responseData
        }
    };
}

function refreshing(url) {
    return {
        type: REFRESHING,
        payload: {
            url: url,
            isRefreshing: true
        }
    };
}

function refreshed(url) {
    return {
        type: REFRESHED,
        payload: {
            url: url,
            isRefreshing: false
        }
    };
}

export function refreshData(subUrl, type) {
    return dispatch => {
        dispatch(refreshing(subUrl));
        dispatch(requesting(subUrl));
        return fetch(`http://api.budejie.com/api/api_open.php?${subUrl}`)
            .then(response => response.json())
            .then(json => {
                dispatch(refreshed(subUrl));
                dispatch(received(subUrl));
                dispatch(receiveData(subUrl, type, json));
            });
    };
}

export function fetchData(subUrl, type) {
    return dispatch => {
        dispatch(requesting(subUrl));
        return fetch(`http://api.budejie.com/api/api_open.php?${subUrl}`)
            .then(response => response.json())
            .then(json => {
                dispatch(received());
                dispatch(receiveData(subUrl, type, json));
            });
    };
}

export function goToTag() {
    return {
        type: GO_TO_TAG,
        payload: {

        }
    };
}

export function goToFollow() {
    return {
        type: GO_TO_FOLLOW,
        payload: {

        }
    };
}

export function modal(visible) {
    return {
        type: MODAL,
        payload: {
            modalVisible: visible
        }
    };
}

export function dismiss(visible) {
    return {
        type: DISMISS,
        payload: {
            modalVisible: visible
        }
    };
}

export function weatherCanFocus(visible) {
    return {
        type: CAN_FOCUS,
        payload: {
            canFocus: visible
        }
    };
}

export function login(userInfo) {
    return {
        type: LOGIN,
        payload: {
            userInfo: userInfo
        }
    };
}

export function qqLogin(userInfo) {
    return {
        type: QQ_LOGIN,
        payload: {
            userInfo: userInfo
        }
    };
}

export function sinaLogin(userInfo) {
    return {
        type: SINA_LOGIN,
        payload: {
            userInfo: userInfo
        }
    };
}

export function tecentLogin(userInfo) {
    return {
        type: TECENT_LOGIN,
        payload: {
            userInfo: userInfo
        }
    };
}

export function goToRegister() {
    return {
        type: GO_TO_REGISTER,
        payload: {

        }
    };
}

export function goToForgetPassword() {
    return {
        type: GO_TO_FORGET_PASSWORD,
        payload: {

        }
    };
}

export function register(userInfo) {
    return {
        type: REGISTER,
        payload: {
            userInfo: userInfo
        }
    };
}

/* ============================= Action Creator End =============================== */

/* jshint esversion: 6 */
'use strict';

import {
    MODAL,
    DISMISS,
    CAN_FOCUS,
    LOGIN,
    QQ_LOGIN,
    SINA_LOGIN,
    TECENT_LOGIN,
    GO_TO_REGISTER,
    GO_TO_FORGET_PASSWORD,
    REGISTER
} from './ActionsType';

/* ============================= Action Creator Start =============================== */
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

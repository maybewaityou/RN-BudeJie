/* jshint esversion: 6 */
'use strict';

import { MODAL, DISMISS, CAN_FOCUS } from './ActionsType';

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

/* ============================= Action Creator End =============================== */

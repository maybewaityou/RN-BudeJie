/* jshint esversion: 6 */
'use strict';

import { MODAL, DISMISS } from './ActionsType';

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

/* ============================= Action Creator End =============================== */

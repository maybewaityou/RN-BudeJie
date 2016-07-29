/* jshint esversion: 6 */
'use strict';

/* ============================= Action Type Start =============================== */
// 网络请求
export const REQUESTING = 'REQUESTING';
export const RECEIVED = 'RECEIVED';
export const REFRESHING = 'REFRESHING';
export const REFRESHED = 'REFRESHED';

// 精华页面 && 新帖页面
export const TOPIC_ALL_REFRESH = 'TOPIC_ALL_REFRESH';
export const TOPIC_ALL_LOAD_MORE = 'TOPIC_ALL_LOAD_MORE';
export const TOPIC_PICTURE_REFRESH = 'TOPIC_PICTURE_REFRESH';
export const TOPIC_PICTURE_LOAD_MORE = 'TOPIC_PICTURE_LOAD_MORE';
export const TOPIC_VIDEO_REFRESH = 'TOPIC_VIDEO_REFRESH';
export const TOPIC_VIDEO_LOAD_MORE = 'TOPIC_VIDEO_LOAD_MORE';
export const TOPIC_VOICE_REFRESH = 'TOPIC_VOICE_REFRESH';
export const TOPIC_VOICE_LOAD_MORE = 'TOPIC_VOICE_LOAD_MORE';
export const TOPIC_WORD_REFRESH = 'TOPIC_WORD_REFRESH';
export const TOPIC_WORD_LOAD_MORE = 'TOPIC_WORD_LOAD_MORE';

export const GO_TO_TAG = 'GO_TO_TAG';


// 关注页面
export const GO_TO_FOLLOW = 'GO_TO_FOLLOW';

// 我的页面
export const REQUEST_SQUARE = 'REQUEST_SQUARE';

// 登录弹出
export const MODAL = 'MODAL';
export const DISMISS = 'DISMISS';

// 登录页面
export const CAN_FOCUS = 'CAN_FOCUS';
export const LOGIN = 'LOGIN';
export const QQ_LOGIN = 'QQ_LOGIN';
export const SINA_LOGIN = 'SINA_LOGIN';
export const TECENT_LOGIN = 'TECENT_LOGIN';
export const GO_TO_REGISTER = 'GO_TO_REGISTER';
export const GO_TO_FORGET_PASSWORD = 'GO_TO_FORGET_PASSWORD';
export const REGISTER = 'REGISTER';

/* ============================= Action Type End =============================== */

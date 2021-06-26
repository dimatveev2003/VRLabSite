/* eslint-disable no-redeclare */
/** Очистить хранилище */
export const INITIALIZE = "APP_CONTEXT_APP_INITIALIZE";
export type INITIALIZE = typeof INITIALIZE;

/** Сброс ошибки */
export const EMIT_ERROR = "APP_CONTEXT_APP_EMIT_ERROR";
export type EMIT_ERROR = typeof EMIT_ERROR;

/** Сброс ошибки */
export const CLEAR_ERROR = "APP_CONTEXT_APP_CLEAR_ERROR";
export type CLEAR_ERROR = typeof CLEAR_ERROR;

/** Установить язык приложения */
export const SET_LANGUAGE = "APP_CONTEXT_APP_SET_LAGUAGE";
export type SET_LANGUAGE = typeof SET_LANGUAGE;

/** Установить токен */
export const SET_TOKEN = "APP_CONTEXT_APP_SET_TOKEN";
export type SET_TOKEN = typeof SET_TOKEN;

/** установить отображение глобального прелоадера */
export const SET_DISPLAY_GLOBAL_PRELOADER = "APP_CONTEXT_SET_DISPLAY_GLOBAL_PRELOADER";
export type SET_DISPLAY_GLOBAL_PRELOADER = typeof SET_DISPLAY_GLOBAL_PRELOADER;

/** Инициализировать сессию */
export const INIT_SESSION = "APP_CONTEXT_APP_SET_SESSION_ID";
export type INIT_SESSION = typeof INIT_SESSION;

/** Указать на какой мы странице сейчас находимся */
export const SET_PAGE_STATE = "APP_CONTEXT_APP_SET_STATE_PAGE";
export type SET_PAGE_STATE = typeof SET_PAGE_STATE;

/** оичтка сессии  */
export const CLEAR_SESSION = "APP_CONTEXT_APP_CLEAR_SESSION";
export type CLEAR_SESSION = typeof CLEAR_SESSION;

/** Информация о юзере  */
export const SET_CLIENT_INFO = "APP_CONTEXT_APP_SET_CLIENT_INFO";
export type SET_CLIENT_INFO = typeof SET_CLIENT_INFO;


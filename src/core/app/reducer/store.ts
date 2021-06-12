/* eslint-disable new-cap */
import { applyMiddleware, createStore as createReduxStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import appCombineReducer from "./combineReducer";
import { isServer } from "core/utils/environment";

/**
 * Инициализирует хранилище приложения
 * @param appState Начальное состояние приложения
 */
export function createStore(appState?: IGlobalAppState) {
	const composeEnhancers = isServer ? compose : (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const createStoreWithMiddleware = true
		? composeEnhancers(applyMiddleware(thunkMiddleware, logger))(createReduxStore)
		: applyMiddleware(thunkMiddleware)(createReduxStore);

	const result = createStoreWithMiddleware(appCombineReducer, appState);

	return result;
}

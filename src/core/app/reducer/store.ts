/* eslint-disable new-cap */
import { applyMiddleware, createStore as createReduxStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import appCombineReducer from "./combineReducer";
import { isServer } from "core/utils/environment";
import React from "react";
import { saveAppContextToStore } from "core/business/app/appInitParams";

let store: any;

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

export const initializeStore = (preloadedState: IGlobalAppState) => {
	let _store = store ?? createStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = createStore({
			...store.getState(),
			...preloadedState
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === "undefined") return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState: IGlobalAppState, initialContext: IAppContextState) {
	const store = initializeStore(initialState);
	saveAppContextToStore(store, initialContext);

	return React.useMemo(() => store, [initialState]);
}

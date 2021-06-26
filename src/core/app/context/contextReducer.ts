import {
	INITIALIZE,
	INIT_SESSION,
	SET_TOKEN,
	SET_PAGE_STATE,
	CLEAR_SESSION,
	EMIT_ERROR,
	CLEAR_ERROR,
	SET_LANGUAGE,
	SET_DISPLAY_GLOBAL_PRELOADER,
	SET_CLIENT_INFO
} from "./contextActionTypes";

import * as actions from "./contextActionCreators";
import { InferValuesTypes } from "../reducer/inferValueTypes";

/** Доступные экшены */
type Actions = ReturnType<InferValuesTypes<typeof actions>>;

/**
 * Reducer для приложения
 * @param state Состояние приложения
 * @param action Действие
 */
export default function reducer(state: IGlobalAppState, action: Actions): IGlobalAppState {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case INITIALIZE: {
			newState.appContext = Object.assign({}, action.payload.context);

			return newState;
		}

		case INIT_SESSION: {
			newState.appContext = Object.assign({}, newState.appContext, {
				sessionId: action.payload.sessionId
			});

			return newState;
		}

		case SET_TOKEN: {
			newState.appContext = Object.assign({}, newState.appContext, {
				tokenId: action.payload.token
			});

			return newState;
		}

		case SET_PAGE_STATE: {
			newState.appContext = Object.assign({}, newState.appContext, {
				pageNavigationState: action.payload.page
			});

			return newState;
		}

		case SET_LANGUAGE: {
			newState.appContext = Object.assign({}, newState.appContext, {
				language: action.payload.lang
			});

			return newState;
		}

		case CLEAR_SESSION: {
			newState.appContext = Object.assign({}, newState.appContext, {
				sessionId: null,
				tokenId: null
			});

			return newState;
		}

		case EMIT_ERROR: {
			newState.appContext = Object.assign({}, newState.appContext, {
				error: action.payload.error
			});

			return newState;
		}

		case CLEAR_ERROR: {
			newState.appContext = Object.assign({}, newState.appContext, {
				error: null
			});

			return newState;
		}

		case SET_DISPLAY_GLOBAL_PRELOADER: {
			newState.appContext = Object.assign({}, newState.appContext, {
				isDiplayGlobalPreloader: action.payload.isDisplay
			});

			return newState;
		}

		case SET_CLIENT_INFO: {
			newState.appContext = Object.assign({}, newState.appContext, {
				client: action.payload.info
			} as IAppContextState);

			return newState;
		}

		default:
			return state;
	}
}

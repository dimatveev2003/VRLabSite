import { generateUUID } from "core/utils/uuidGenerator";
import { ThunkActionType } from "../reducer/thunkActionType";
import * as actionCreator from "./contextActionCreators";
import { isEmpty as isStrEmpty } from "core/utils/stringExtensions";
import * as session from "core/business/app/appSession";
import { removeAccessToken, saveAccessTokenToCookies } from "core/business/app/appAuth";
import { removeClientFromCookies, setClientToCookies } from "core/business/app/clientCookie";

export const initContext =
	(appContext: IAppContextState): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.initContextCreator(appContext));
	};

export const clearToken = (): ThunkActionType => (dispatch) => {
	removeAccessToken();
	removeClientFromCookies();
	dispatch(actionCreator.setTokenCreator(null));
};

export const setToken =
	(token: string): ThunkActionType =>
	(dispatch) => {
		saveAccessTokenToCookies(token);
		dispatch(actionCreator.setTokenCreator(token));
	};

export const initSession =
	(defaultSessionId?: string): ThunkActionType =>
	(dispatch) => {
		const sessionId = defaultSessionId || generateUUID();

		if (isStrEmpty(defaultSessionId)) {
			session.setSessionIdToCookies(sessionId);
		}

		dispatch(actionCreator.initSessionCreator(sessionId));
	};

export const clearSession = (): ThunkActionType => (dispatch) => {
	dispatch(actionCreator.clearSessionCreator());
};

export const emitError =
	(error: IErrorState | string | number): ThunkActionType =>
	(dispatch) => {
		if (typeof error === "string") {
			dispatch(actionCreator.emitErrorCreator({ errorMessage: error }));
		} else if (typeof error === "number") {
			dispatch(actionCreator.emitErrorCreator({ typeError: error }));
		} else {
			dispatch(actionCreator.emitErrorCreator(error));
		}
	};

export const clearError = (): ThunkActionType => (dispatch) => {
	dispatch(actionCreator.clearErrorCreator());
};

export const setPageState =
	(page: string): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.setPageStateCreator(page));
	};

export const setClientInfoAction =
	(info: IClientInfo): ThunkActionType =>
	(dispatch) => {
		setClientToCookies(info);
		dispatch(actionCreator.setClientInfoActionCreator(info));
	};

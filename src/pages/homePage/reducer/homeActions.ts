import apiBuilder from "core/api/apiBuilder";
import { setClientInfoAction, setPageState, setToken } from "core/app/context/contextActions";
import { ThunkActionType } from "core/app/reducer/thunkActionType";
import pages from "core/business/pages";
import { getChangePasswordRequest, getSaveNewDataRequest } from "core/business/requestBusiness";
import { isEmpty } from "core/utils/objectExtensions";
import {
	fetchClientInfoActionCreator,
	setChangePwdSuccessActionCreator,
	setUpdateInfoSuccessActionCreator,
	setValueActionCreator
} from "./homeActionCreators";

export const initHomePageAction = (): ThunkActionType => (dispatch, getState) => {
	dispatch(setPageState(pages.home));
	const client = getState().appContext.client;

	if (!isEmpty(client)) {
		dispatch(setInputValueAction("phone", client.phone));
		dispatch(setInputValueAction("email", client.email));
		return;
	}

	dispatch(getClientInfoAction());
};

export const getClientInfoAction = (): ThunkActionType => (dispatch, getState) => {
	const api = dispatch(apiBuilder()) as IApiMethods;

	dispatch(fetchClientInfoActionCreator(true));

	api.clientInfo()
		.then((response) => {
			dispatch(setClientInfoAction(response as IClientInfo));
		})
		.finally(() => {
			dispatch(fetchClientInfoActionCreator(false));

			const currentClient = getState().appContext.client;

			dispatch(setInputValueAction("phone", currentClient.phone));
			dispatch(setInputValueAction("email", currentClient.email));
		});
};

export const setInputValueAction =
	(name: string, value: string): ThunkActionType =>
	(dispatch) => {
		dispatch(setValueActionCreator(name, value));
	};

export const saveNewDataAction = (): ThunkActionType => (dispatch, getState) => {
	const state = getState();

	const api = dispatch(apiBuilder()) as IApiMethods;
	const request = getSaveNewDataRequest(state);

	api.saveClientInfo(request).then((response) => {
		if (response.isSuccess) {
			dispatch(setUpdateInfoSuccessAction(true));
			dispatch(getClientInfoAction());
		}
	});
};

export const changePasswordAction = (): ThunkActionType => (dispatch, getState) => {
	const page = getState().homePage;

	const api = dispatch(apiBuilder()) as IApiMethods;
	const request = getChangePasswordRequest(page);

	api.changePassword(request).then((response) => {
		if (response.isSuccess) {
			dispatch(setToken(response.tokenModel.token));
			dispatch(setInputValueAction("password", ""));
			dispatch(setChangePwdSuccessAction(true));
		}
	});
};

export const setChangePwdSuccessAction =
	(isSuccess: boolean): ThunkActionType =>
	(dispatch) => {
		dispatch(setChangePwdSuccessActionCreator(isSuccess));
	};

export const setUpdateInfoSuccessAction =
	(isSuccess: boolean): ThunkActionType =>
	(dispatch) => {
		dispatch(setUpdateInfoSuccessActionCreator(isSuccess));
	};

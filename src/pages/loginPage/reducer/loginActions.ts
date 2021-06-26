import { ThunkActionType } from "core/app/reducer/thunkActionType";
import * as actionCreator from "./loginActionCreators";
import { getAuthRequest } from "core/business/requestBusiness";
import apiBuilder from "core/api/apiBuilder";
import { setToken } from "core/app/context/contextActions";
import { NextRouter } from "next/router";

const redirect =
	(router: NextRouter): ThunkActionType =>
	(dispatch, getState) => {
		const state = getState();

		router.push("/home");
	};

export const setInputValue =
	(name: string, value: string): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.setValueCreator(name, value));
	};

export const auth =
	(router: NextRouter): ThunkActionType =>
	(dispatch, getState) => {
		const state = getState();
		const loginPage = state.loginPage;

		const request = getAuthRequest(loginPage);
		const api = dispatch(apiBuilder()) as IApiMethods;

		dispatch(actionCreator.fetchAuthCreator(true));

		api.login(request)
			.then((response) => {
				dispatch(setToken(response.token));

				dispatch(redirect(router));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				dispatch(actionCreator.fetchAuthCreator(false));
			});
	};

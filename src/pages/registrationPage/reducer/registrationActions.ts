import apiBuilder from "core/api/apiBuilder";
import { ThunkActionType } from "core/app/reducer/thunkActionType";
import { getRegisterRequest } from "core/business/requestBusiness";
import { History } from "history";
import * as actionCreator from "./registrationActionCreators";

export const setInputValueAction =
	(name: string, value: string): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.setValueCreator(name, value));
	};

export const setSuccessAction =
	(value: boolean): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.setSuccessActionCreator(value));
	};

export const registerAction = (): ThunkActionType => (dispatch, getState) => {
	const state = getState();
	const api = dispatch(apiBuilder()) as IApiMethods;

	dispatch(actionCreator.fetchRegCreator(true));

	const request = getRegisterRequest(state.registrationPage);

	api.register(request)
		.then((response) => {
			if (response.isSuccess) {
				dispatch(setSuccessAction(true));
			}
		})
		.finally(() => {
			dispatch(actionCreator.fetchRegCreator());
		});
};

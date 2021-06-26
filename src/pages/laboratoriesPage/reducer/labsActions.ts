import apiBuilder from "core/api/apiBuilder";
import { ThunkActionType } from "core/app/reducer/thunkActionType";
import * as actionCreators from "./labsActionCreators";

export const initLabsPageAction = (): ThunkActionType => (dispatch) => {
    dispatch(loadBundlesAction());
    dispatch(loadLabsAction());
}

export const loadBundlesAction = (): ThunkActionType => (dispatch) => {
	const api = dispatch(apiBuilder()) as IApiMethods;

	dispatch(actionCreators.fetchBundlesActionCreator(true));
	api.bundles()
		.then((response) => {
			dispatch(actionCreators.setBundlesActionCreators(response.bundles));
		})
		.finally(() => {
			dispatch(actionCreators.fetchBundlesActionCreator());
		});
};


export const loadLabsAction = (): ThunkActionType => (dispatch) => {
	const api = dispatch(apiBuilder()) as IApiMethods;

	dispatch(actionCreators.fetchLabsActionCreator(true));
	api.labs()
		.then((response) => {
			dispatch(actionCreators.setLabsActionCreators(response.laboratories));
		})
		.finally(() => {
			dispatch(actionCreators.fetchLabsActionCreator());
		});
};


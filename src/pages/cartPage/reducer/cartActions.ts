import apiBuilder from "core/api/apiBuilder";
import { ThunkActionType } from "core/app/reducer/thunkActionType";
import { getCreateOrderRequest } from "core/business/requestBusiness";
import { addProductActionCreator, clearActionCreator, removeProductActionCreator } from "./cartActionCreators";

export const addProductAction =
	(product: ICartProduct): ThunkActionType =>
	(dispatch) => {
		dispatch(addProductActionCreator(product));
	};

export const removeProductAction =
	(product: ICartProduct): ThunkActionType =>
	(dispatch) => {
		dispatch(removeProductActionCreator(product.id, product.type));
	};

export const clearAction = (): ThunkActionType => (dispatch) => {
	dispatch(clearActionCreator());
};

export const createOrderAction = (): ThunkActionType => (dispatch, getState) => {
	const api = dispatch(apiBuilder()) as IApiMethods;
	const request = getCreateOrderRequest(getState().cartPage);
	console.log(request);
};

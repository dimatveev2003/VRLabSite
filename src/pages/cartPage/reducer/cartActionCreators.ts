import ProductTypes from "core/enum/ProductTypes";
import * as types from "./cartActionTypes";

export function addProductActionCreator(product: ICartProduct) {
	return {
		type: types.ADD_PRODUCT,
		payload: {
			product
		}
	} as const;
}

export function removeProductActionCreator(productId: number, type: ProductTypes) {
	return {
		type: types.REMOVE_PRODUCT,
		payload: {
			productId,
			type
		}
	} as const;
}

export function clearActionCreator() {
	return {
		type: types.CLEAR
	} as const;
}

export function createOrderSuccessActionCreator(isSuccess: boolean) {
	return {
		type: types.CREATE_ORDER_SUCCESS,
		payload: {
			isSuccess
		}
	} as const;
}

export function setOrderNumberActionCreator(orderNumber: number) {
	return {
		type: types.SET_ORDER_NUMBER,
		payload: {
			orderNumber
		}
	} as const;
}

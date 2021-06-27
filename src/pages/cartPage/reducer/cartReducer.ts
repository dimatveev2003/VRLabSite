import { InferValuesTypes } from "core/app/reducer/inferValueTypes";
import * as actions from "./cartActionCreators";
import * as types from "./cartActionTypes";

export const cartPageDefaultState: ICartPageState = {
	products: [],
	isSuccessCreateOrder: false,
	amount: 0
};

type Actions = ReturnType<InferValuesTypes<typeof actions>>;

export default function reducer(state: IGlobalAppState, action: Actions) {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.ADD_PRODUCT: {
			const products = newState.cartPage.products;
			products.push(action.payload.product);

			newState.cartPage = Object.assign({}, newState.cartPage, {
				products,
				amount: newState.cartPage.amount + action.payload.product.price.price,
				currencyId: action.payload.product.price.currency.id
			} as ICartPageState);

			return newState;
		}

		case types.REMOVE_PRODUCT: {
			const products = newState.cartPage.products;

			const index = products.findIndex((p) => p.type === action.payload.type && p.id === action.payload.productId);
			const product = products.find((p) => p.type === action.payload.type && p.id === action.payload.productId);

			products.splice(index, 1);

			newState.cartPage = Object.assign({}, newState.cartPage, {
				products,
				amount: newState.cartPage.amount - product.price.price
			} as ICartPageState);

			return newState;
		}

		case types.CLEAR: {
			const products: ICartProduct[] = [];

			newState.cartPage = Object.assign({}, newState.cartPage, { products });

			return newState;
		}

		case types.CREATE_ORDER_SUCCESS: {
			newState.cartPage = Object.assign({}, newState.cartPage, {
				isSuccessCreateOrder: action.payload.isSuccess
			} as ICartPageState);

			return newState;
		}

		case types.SET_ORDER_NUMBER: {
			newState.cartPage = Object.assign({}, newState.cartPage, {
				orderNumber: action.payload.orderNumber
			} as ICartPageState);

			return newState;
		}

		default:
			return state;
	}
}

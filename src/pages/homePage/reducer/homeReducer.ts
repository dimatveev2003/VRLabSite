import { InferValuesTypes } from "core/app/reducer/inferValueTypes";
import * as actions from "./homeActionCreators";
import * as types from "./homeActionTypes";

type Actions = ReturnType<InferValuesTypes<typeof actions>>;

export const homeDefaultState: IHomePageState = {
	isFetchClientInfo: false,
	email: "",
	phone: "",
	password: ""
};

export default function reducer(state: IGlobalAppState, action: Actions) {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.HOME_FETCH_CLIENT_INFO: {
			newState.homePage = Object.assign({}, state.homePage, {
				isFetchClientInfo: action.payload.isFetch
			} as IHomePageState);

			return newState;
		}

		case types.HOME_SET_VALUE: {
			const key = action.payload.key;
			const value = action.payload.value;

			newState.homePage = Object.assign({}, state.homePage, { [key]: value });

			return newState;
		}

		case types.HOME_SET_CHANGE_PWD_SUCCESS: {
			newState.homePage = Object.assign({}, state.homePage, {
				isPasswordChangeSuccess: action.payload.isSuccess
			} as IHomePageState);

			return newState;
		}

		case types.HOME_SET_UPDATE_INFO_SUCCESS: {
			newState.homePage = Object.assign({}, state.homePage, {
				isClientInfoChaneSuccess: action.payload.isSuccess
			} as IHomePageState);

			return newState;
		}

		default:
			return state;
	}
}

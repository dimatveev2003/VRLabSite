import { InferValuesTypes } from "core/app/reducer/inferValueTypes";
import * as actions from "./loginActionCreators";
import * as types from "./loginActionTypes";

type Actions = ReturnType<InferValuesTypes<typeof actions>>;

export const loginDefaultState: ILoginPageState = {
	login: "",
	password: "",
	isFetch: false
};

export default function reducer(state: IGlobalAppState, action: Actions) {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.LOGIN_SET_VALUE: {
			const key = action.payload.key;
			const value = action.payload.value;

			newState.loginPage = Object.assign({}, state.loginPage, { [key]: value });

			return newState;
		}

		case types.LOGIN_FETCH_AUTH: {
			newState.loginPage = Object.assign({}, state.loginPage, { isFetch: action.payload.value } as ILoginPageState);

			return newState;
		}

		default:
			return state;
	}
}

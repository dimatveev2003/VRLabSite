import { InferValuesTypes } from "core/app/reducer/inferValueTypes";
import * as actions from "./registrationActionCreators";
import * as types from "./registrationActionTypes";

export const registrationDefaultState: IRegistrationPageState = {
	login: "",
	password: "",
	isFetch: false,
	organizationName: "",
	email: "",
	phone: ""
};

type Actions = ReturnType<InferValuesTypes<typeof actions>>;

export default function reducer(state: IGlobalAppState, action: Actions) {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.REGISTRATION_SET_VALUE: {
			const key = action.payload.key;
			const value = action.payload.value;

			newState.registrationPage = Object.assign({}, state.registrationPage, { [key]: value });

			return newState;
		}

		case types.REGISTRATION_FETCH: {
			newState.registrationPage = Object.assign({}, state.registrationPage, { isFetch: action.payload.value } as IRegistrationPageState);

			return newState;
		}

		default:
			return state;
	}
}

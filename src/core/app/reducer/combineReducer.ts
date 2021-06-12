import loginReducer, { loginDefaultState } from "pages/loginPage/reducer/loginReducer";
import registrationReducer, { registrationDefaultState } from "pages/registrationPage/reducer/registrationReducer";

const defaultGlobalAppState: IGlobalAppState = {
	appContext: {},
	loginPage: loginDefaultState,
	registrationPage: registrationDefaultState
};

const globalCustomReduce = (state = defaultGlobalAppState, action: any): IGlobalAppState => {
	let newState = Object.assign({}, state);

	newState = loginReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = registrationReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	return newState;
};

export default globalCustomReduce;

import loginReducer, { loginDefaultState } from "pages/loginPage/reducer/loginReducer";
import registrationReducer, { registrationDefaultState } from "pages/registrationPage/reducer/registrationReducer";
import homeReducer, { homeDefaultState } from "pages/homePage/reducer/homeReducer";
import contextReducer from "core/app/context/contextReducer";
import labsReducer from "pages/laboratoriesPage/reducer/labsReducer";
import cartReducer, { cartPageDefaultState } from "pages/cartPage/reducer/cartReducer";

const defaultGlobalAppState: IGlobalAppState = {
	loginPage: loginDefaultState,
	registrationPage: registrationDefaultState,
	homePage: homeDefaultState,
	laboratoriesPage: {},
	cartPage: cartPageDefaultState
};

const globalCustomReduce = (state = defaultGlobalAppState, action: any): IGlobalAppState => {
	let newState = contextReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = loginReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = registrationReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = homeReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = labsReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = cartReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	return newState;
};

export default globalCustomReduce;

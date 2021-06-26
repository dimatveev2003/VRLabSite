import { InferValuesTypes } from "core/app/reducer/inferValueTypes";
import * as actions from "./labsActionCreators";
import * as types from "./labsActionTypes";

type Actions = ReturnType<InferValuesTypes<typeof actions>>;

export default function reducer(state: IGlobalAppState, action: Actions) {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.FETCH_LABS: {
			newState.laboratoriesPage = Object.assign({}, newState.laboratoriesPage, {
				isLabsFetch: action.payload.isFetch
			} as ILaboratoriesPageState);

			return newState;
		}

		case types.FETCH_BUNDLES: {
			newState.laboratoriesPage = Object.assign({}, newState.laboratoriesPage, {
				isBundlesFetch: action.payload.isFetch
			} as ILaboratoriesPageState);

			return newState;
		}

		case types.SET_BUNDLES: {
			newState.laboratoriesPage = Object.assign({}, newState.laboratoriesPage, {
				bundles: action.payload.bundles
			} as ILaboratoriesPageState);

			return newState;
		}

		case types.SET_LABS: {
			newState.laboratoriesPage = Object.assign({}, newState.laboratoriesPage, {
				laboratories: action.payload.labs
			} as ILaboratoriesPageState);

			return newState;
		}

		default:
			return state;
	}
}

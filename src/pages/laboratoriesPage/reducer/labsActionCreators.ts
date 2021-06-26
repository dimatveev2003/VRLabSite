import * as types from "./labsActionTypes";

export function fetchLabsActionCreator(isFetch = false) {
	return {
		type: types.FETCH_LABS,
		payload: { isFetch }
	} as const;
}

export function fetchBundlesActionCreator(isFetch = false) {
	return {
		type: types.FETCH_BUNDLES,
		payload: { isFetch }
	} as const;
}

export function setLabsActionCreators(labs: ILaboratoryModel[]) {
	return {
		type: types.SET_LABS,
		payload: { labs }
	} as const;
}

export function setBundlesActionCreators(bundles: IBundleModel[]) {
	return {
		type: types.SET_BUNDLES,
		payload: { bundles }
	} as const;
}

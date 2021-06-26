import {
	HOME_FETCH_CLIENT_INFO,
	HOME_SET_CHANGE_PWD_SUCCESS,
	HOME_SET_UPDATE_INFO_SUCCESS,
	HOME_SET_VALUE
} from "./homeActionTypes";

export function fetchClientInfoActionCreator(isFetch = false) {
	return {
		type: HOME_FETCH_CLIENT_INFO,
		payload: {
			isFetch
		}
	} as const;
}

export function setValueActionCreator(key: string, value: string) {
	return {
		type: HOME_SET_VALUE,
		payload: {
			key,
			value
		}
	} as const;
}

export function setChangePwdSuccessActionCreator(isSuccess: boolean) {
	return {
		type: HOME_SET_CHANGE_PWD_SUCCESS,
		payload: {
			isSuccess
		}
	} as const;
}

export function setUpdateInfoSuccessActionCreator(isSuccess: boolean) {
	return {
		type: HOME_SET_UPDATE_INFO_SUCCESS,
		payload: {
			isSuccess
		}
	} as const;
}

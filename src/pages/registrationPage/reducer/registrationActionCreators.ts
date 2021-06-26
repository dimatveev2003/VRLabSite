import { REGISTRATION_SET_VALUE, REGISTRATION_FETCH, REGISTRATION_SUCCESS } from "./registrationActionTypes";

export function setValueCreator(key: string, value: string) {
	return {
		type: REGISTRATION_SET_VALUE,
		payload: {
			key,
			value
		}
	} as const;
}

export function fetchRegCreator(value = false) {
	return {
		type: REGISTRATION_FETCH,
		payload: {
			value
		}
	} as const;
}

export function setSuccessActionCreator(value: boolean) {
	return {
		type: REGISTRATION_SUCCESS,
		payload: {
			value
		}
	} as const;
}

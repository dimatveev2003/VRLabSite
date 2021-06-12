import { REGISTRATION_SET_VALUE, REGISTRATION_FETCH } from "./registrationActionTypes";

export function setValueCreator(key: string, value: string) {
	return {
		type: REGISTRATION_SET_VALUE,
		payload: {
			key,
			value
		}
	} as const;
}

export function fetchAuthCreator(value: boolean) {
	return {
		type: REGISTRATION_FETCH,
		payload: {
			value
		}
	} as const;
}

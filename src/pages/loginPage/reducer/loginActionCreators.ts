import { LOGIN_FETCH_AUTH, LOGIN_SET_VALUE } from "./loginActionTypes";

export function setValueCreator(key: string, value: string) {
	return {
		type: LOGIN_SET_VALUE,
		payload: {
			key,
			value
		}
	} as const;
}

export function fetchAuthCreator(value: boolean) {
	return {
		type: LOGIN_FETCH_AUTH,
		payload: {
			value
		}
	} as const;
}

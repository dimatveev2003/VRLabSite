import { ThunkActionType } from "core/app/reducer/thunkActionType";
import { History } from "history";
import * as actionCreator from "./loginActionCreators";

const redirect =
	(history: History<any>): ThunkActionType =>
	(dispatch, getState) => {
		const state = getState();

		history.push("/home");
	};

export const setInputValue =
	(name: string, value: string): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.setValueCreator(name, value));
	};

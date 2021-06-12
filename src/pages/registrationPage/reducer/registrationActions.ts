import { ThunkActionType } from "core/app/reducer/thunkActionType";
import { History } from "history";
import * as actionCreator from "./registrationActionCreators";

export const setInputValue =
	(name: string, value: string): ThunkActionType =>
	(dispatch) => {
		dispatch(actionCreator.setValueCreator(name, value));
	};

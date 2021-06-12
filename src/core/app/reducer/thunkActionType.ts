import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

/**
 * Тип описывающий действие к dispatch Actions
 */
export type ThunkActionType<TReturn = void> = ThunkAction<TReturn, IGlobalAppState, unknown, AnyAction>;

import ApiClient from "./apiClient";
import { ThunkActionType } from "core/app/reducer/thunkActionType";
import { isEmpty } from "core/utils/stringExtensions";
import ApiMethods from "./apiMethods";

/**
 * Получить клиент для доступа к Апи
 * @param ctx Контекст приложения
 */
export function baseApiBuilder(ctx: IAppContextState) {
	const apiClient = new ApiClient({
		apiEndpoint: ctx.config.apiEndpoint,
		sessionId: ctx.sessionId,
		language: ctx.language,
		accessToken: ctx.tokenId
	});

	const apiMethods = new ApiMethods(apiClient);

	return apiMethods;
}

/** Получить клиент для доступа к Апи */
export function apiBuilder(): ThunkActionType<IApiMethods> {
	return (dispatch, getState) => {
		const state: IGlobalAppState = getState();
		const settings = state.appContext;
		const result = baseApiBuilder(settings);

		return result;
	};
}

export default apiBuilder;

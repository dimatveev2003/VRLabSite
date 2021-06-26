import { initContext } from "core/app/context/contextActions";
import { getAccessToken } from "./appAuth";
import { getSessionId } from "./appSession";
import { getClientFromCookies } from "./clientCookie";

/**
 * Получить остояние для контекста для передачи его в компоненты
 */
export function createAppInitContextTypes(): IAppBaseContextTypes {
	return {
		context: {},
		exit: () => {},
		isAuthenticated: () => false
	};
}

/**
 * Создает параметры инициализации приложения
 * @param config Конфиг приложения
 */
export function createAppContextState(config: IAppSettings): IAppContextState {
	const sessionId: string = getSessionId();
	const accessToken: string = getAccessToken();

	return {
		language: "ru",
		sessionId,
		tokenId: accessToken,
		config,
		client: getClientFromCookies()
	};
}

export function saveAppContextToStore(store: any, appContext: IAppContextState) {
	store.dispatch(initContext(appContext));
}

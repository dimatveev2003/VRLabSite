import { getAccessToken } from "./appAuth";
import { getSessionId } from "./appSession";

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
export function createAppContextState(): IAppContextState {
	const sessionId: string = getSessionId();
	const accessToken: string = getAccessToken();

	return {
		language: "ru",
		sessionId,
		tokenId: accessToken
	};
}
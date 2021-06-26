import {
	INITIALIZE,
	INIT_SESSION,
	SET_TOKEN,
	SET_PAGE_STATE,
	CLEAR_SESSION,
	EMIT_ERROR,
	CLEAR_ERROR,
	SET_LANGUAGE,
	SET_DISPLAY_GLOBAL_PRELOADER,
	SET_CLIENT_INFO
} from "./contextActionTypes";

/**
 * Инициализация контекста приложения
 * @param context контекст данных
 */
export function initContextCreator(context: IAppContextState) {
	return {
		type: INITIALIZE,
		payload: {
			context
		}
	} as const;
}

/**
 * Установить токен
 * @param token токен авторизации
 */
export function setTokenCreator(token: string) {
	return {
		type: SET_TOKEN,
		payload: {
			token
		}
	} as const;
}

/**
 * ИНициализировать сессию
 * @param sessionId идентификатор сессии
 */
export function initSessionCreator(sessionId: string) {
	return {
		type: INIT_SESSION,
		payload: {
			sessionId
		}
	} as const;
}

/**
 * ОЧистить сессию
 */
export function clearSessionCreator() {
	return {
		type: CLEAR_SESSION
	} as const;
}

/**
 * Установить состояние активной страницы
 * @param page страница на которой находиимся
 */
export function setPageStateCreator(page: string) {
	return {
		type: SET_PAGE_STATE,
		payload: {
			page
		}
	} as const;
}

/**
 * Установить ошибку приоложения
 * @param error Ошибка
 */
export function emitErrorCreator(error: IErrorState) {
	return {
		type: EMIT_ERROR,
		payload: {
			error
		}
	} as const;
}

/**
 * Убрать ошибку приоложения
 * @param error Ошибка
 */
export function clearErrorCreator() {
	return {
		type: CLEAR_ERROR
	} as const;
}

/**
 * установить язык
 * @param lang язык
 */
export function setLanguageCreator(lang: string) {
	return {
		type: SET_LANGUAGE,
		payload: {
			lang
		}
	} as const;
}

/**
 * Установить отображение глобального прелоадера
 * @param isDisplay отоброжать
 */
export function setDisplayGlobalPreloaderCreator(isDisplay = true) {
	return {
		type: SET_DISPLAY_GLOBAL_PRELOADER,
		payload: {
			isDisplay
		}
	} as const;
}

export function setClientInfoActionCreator(info: IClientInfo) {
	return {
		type: SET_CLIENT_INFO,
		payload: {
			info
		}
	} as const;
}

/**
 * Возвращает признак наличия window.
 */
function isWindowUndefined() {
	return typeof window === "undefined";
}

/**
 * Признак серверного рендеринга.
 */
export const isServer = isWindowUndefined();

/**
 * Безопасный вызов функции на клиенте
 * @param func Фунция
 */
export function safeClientEnvironmentInvoke(func: Function) {
	if (isServer) {
		return;
	}

	try {
		func();
	} catch (e) {
		console.log(e);
	}
}

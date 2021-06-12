import { generateUUID } from "core/utils/uuidGenerator";
import cookie from "react-cookies";

/** Ключ сессии */
const SESSION_ID_KEY = "__muctr-vr_site-session_id";

/** опции куков */
const coockieOptions = {
	path: "/",
	httpOnly: false,
};

/**
 * Получить сессию клиента
 */
export function getSessionId() {
	return cookie.load(SESSION_ID_KEY);
}

/**
 * Создать сессию
 * @param sessionId Идентификатор сессии
 */
export function createSession(sessionId: string) {
	if (!sessionId) {
		sessionId = getSessionId() || generateUUID();
	}

	cookie.save(SESSION_ID_KEY, sessionId, coockieOptions);
}

/**
 * Присвоение идентификатора сессии в cookies
 * @param sessionId Идентификатор сессии
 */
export function setSessionIdToCookies(sessionId: string) {
	cookie.save(SESSION_ID_KEY, sessionId, coockieOptions);
}

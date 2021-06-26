import cookie from "react-cookies";

/** Ключ дл получения токена авторизации */
const AUTH_INFO_KEY = "__muctr-vr_site-auth_info_token";

/** Ключ для получения токена обновления */
// const REFRESH_INFO_KEY = "auth_info_token";

/** опции куков */
const coockieOptions = {
	path: "/",
	httpOnly: false,
};

/**
 * Получает токен авторизации
 */
export function getAccessToken() {
	const accessToken = cookie.load(AUTH_INFO_KEY);

	return accessToken;
}

/**
 * удаляет токен авторизации
 */
export function removeAccessToken() {
	return cookie.remove(AUTH_INFO_KEY, coockieOptions);
}

/**
 * Проверяет, залогинен ли пользователь
 */
export function isAuthenticated() {
	return !!getAccessToken();
}

/**
 * Получает токен авторизации из cookies
 * @param authInfo Токен авторизации
 */
export function saveAccessTokenToCookies(authInfo: string) {
	cookie.save(AUTH_INFO_KEY, authInfo, coockieOptions);
}

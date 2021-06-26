import cookie from "react-cookies";

/** Ключ сессии */
const CLIENT_KEY = "__muctr-vr_site-client";

/** опции куков */
const coockieOptions = {
	path: "/",
	httpOnly: false,
};

/**
 * Получить сессию клиента
 */
export function getClientFromCookies(): IClientInfo {
	return cookie.load(CLIENT_KEY);
}


export function removeClientFromCookies() {
    return cookie.remove(CLIENT_KEY);
}


/**
 * Присвоение идентификатора сессии в cookies
 */
export function setClientToCookies(client: IClientInfo) {
	cookie.save(CLIENT_KEY, client, coockieOptions);
}

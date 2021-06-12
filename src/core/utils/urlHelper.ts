/**
 * Получить ключ и значение из url
 * @param nameValue Ключ значение
 */
 function extractKeyValueFromUrlPart(urlPart: string) {
	const parts = urlPart.split("=");
	const key = parts.shift();
	let value = parts.length > 0 ? parts.join("=") : undefined;
	value = value === undefined ? null : decodeURIComponent(value);

	return { key, value };
}

/**
 * Сериализует объект в строку запроса
 * @param obj Plain object
 */
export function serializeToQueryString(obj: any): string {
	if (!obj) {
		return "";
	}

	const pairs = [];

	for (const prop in obj) {
		if (!obj.hasOwnProperty(prop)) {
			continue;
		}

		if (Object.prototype.toString.call(obj[prop]) === "[object Array]") {
			obj[prop].forEach((value: any) => {
				pairs.push(`${prop}=${encodeURIComponent(value)}`);
			});
		} else {
			pairs.push(`${prop}=${encodeURIComponent(obj[prop])}`);
		}
	}

	return pairs.join("&");
}

/**
 * Вырезает все undefined свойства
 * @param obj Plain object
 */
export function cutUndefinedProperties(obj: any): any {
	if (!obj) {
		return obj;
	}

	if (Object.prototype.toString.call(obj) === "[object Array]") {
		return obj;
	}

	const result: any = {};
	for (const prop in obj) {
		if (!obj.hasOwnProperty(prop) || obj[prop] === undefined) {
			continue;
		}

		result[prop] = obj[prop];
	}

	return result;
}

/**
 * Возвращает текущий протокол
 */
// TODO: сделать изоморфным
export function getCurrentProtocol(): string {
	if (typeof location !== "undefined") {
		return location.protocol.replace(":", "");
	}

	return "https";
}

/**
 * Возвращает текущий домен
 */
// TODO: сделать изоморфным
export function getDomain(): string {
	if (typeof window !== "undefined") {
		return window.location.host;
	}

	return undefined;
}

/**
 * Возвращает текущий href из объекта @see window
 */
export function locationHref(): string {
	if (typeof window !== "undefined") {
		return window.location.href;
	}

	return undefined;
}

/**
 * Объединяет url и path для исключения дубля слеша
 * @param url Url
 * @param path Путь без пртокола и домена
 */
export function joinPathToUrl(url: string, path: string): string {
	if (!url) {
		return path;
	}

	if (!path) {
		return url;
	}

	const urlClosedBySlash = url.lastIndexOf("/") === url.length - 1;
	const pathStartedBySlash = path.indexOf("/") === 0;

	if (urlClosedBySlash && !pathStartedBySlash) {
		return `${url}${path}`;
	}

	if (!urlClosedBySlash && pathStartedBySlash) {
		return `${url}${path}`;
	}

	if (!urlClosedBySlash && !pathStartedBySlash) {
		return `${url}/${path}`;
	}

	return `${url}${path.substring(1)}`;
}

/**
 * Преобразует параметр с массивом в строку
 * @param value Параметр
 */
export function convertArrayToStringRequestParam(value: string[]): string {
	if (!value) {
		return undefined;
	}

	return value.join(",");
}

/**
 * Получить параметры из строки запроса
 * @param queryString Строка запроса
 */
export function parse(queryString: string) {
	const result: any = {};

	if (typeof queryString !== "string") {
		return result;
	}

	queryString = queryString.trim().replace(/^[?#&]/, "");

	if (!queryString) {
		return result;
	}

	queryString.split("&").forEach(param => {
		const keyValue = extractKeyValueFromUrlPart(param);
		result[keyValue.key] = keyValue.value;
	});

	return result;
}

/**
 * Получает свойство объекта по нечувствительному к регистру имени свойства
 * @param obj Объект
 * @param prop Свойство
 */
export function getCaseInsensetiveProp(obj: any, prop: string) {
	if (!obj) {
		return undefined;
	}

	if (obj[prop]) {
		return obj[prop];
	}

	const keys = Object.keys(obj).filter(key => key.toLowerCase() === prop.toLowerCase());

	if (!keys || keys.length === 0) {
		return undefined;
	}

	return obj[keys[0]];
}

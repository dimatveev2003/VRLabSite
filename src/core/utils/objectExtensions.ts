/* eslint-disable no-prototype-builtins */
/**
 * Проверяет есть ли значение у какого либо свойства в объекте
 * @param obj Объект
 * @param value значение
 */
export function hasValue(obj: any, value: any): boolean {
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === value) {
			return true;
		}
	}

	return false;
}

/**
 * Получает название свойства по значению в объекте
 * @param obj Объект
 * @param value значение
 */
export function getKeyByValue(obj: any, value: any): string {
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === value) {
			return key;
		}
	}

	throw new Error(`Unknown value: ${value}`);
}

/**
 * Получить указанный ключ из объекта
 * @param obj объект
 * @param prop свойство
 */
export function getKeyFromObj<TObject>(obj: TObject, prop: string) {
	for (const key in obj) {
		if (key === prop) {
			return obj[key];
		}
	}

	return null;
}

/**
 * Удаляет свойство по dot notation name
 * @param obj Объект
 * @param prop Имя свойства
 */
export function deleteProperty(obj: any, prop: string) {
	const parts = prop.split(".");
	const last = parts.pop();
	const l = parts.length;
	let i = 1;
	let current = parts[0];

	while ((obj = obj[current]) && i < l) {
		current = parts[i];
		i++;
	}

	if (obj) {
		delete obj[last];
	}
}

/**
 * Проверяет объект на null и наличие свойств
 * @param obj Объект
 */
export function isEmpty<TObject = any>(obj: TObject) {
	return !obj || Object.getOwnPropertyNames(obj).length === 0;
}

/**
 * Вырезает все undefined свойства
 * @param obj Объект
 */
export function cutUndefinedProperties(obj: any) {
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

	const keys = Object.keys(obj).filter((key) => key.toLowerCase() === prop.toLowerCase());

	if (!keys || keys.length === 0) {
		return undefined;
	}

	return obj[keys[0]];
}

/**
 * Получить имя первого свойства объекта
 * @param obj Объект
 */
export function getFirstKeys(obj: any) {
	const keys = Object.keys(obj);

	return keys.length > 0 ? keys[0] : undefined;
}

/**
 * Является ли объект функцией
 * @param func Функция дял проверки
 */
export function isFunction(func: Function) {
	return typeof func === "function";
}

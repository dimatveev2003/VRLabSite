/**
 * Проверяет значение на пустоту
 * @param value Значение
 */
export function isEmpty(value: string): boolean {
	return typeof value === "undefined" || value === null || value === "";
}

/**
 * Удаляет пробелы
 * @param str Строка
 */
export function removeWhitespaces(str: string): string {
	if (!str) {
		return str;
	}

	return str.replace(/\s/g, "");
}

/**
 * Удаляет все не числа
 * @param str Строка
 */
export function removeAnyNoneDigitChar(str: string): string {
	if (!str) {
		return str;
	}

	return str.replace(/\D/g, "");
}

/**
 * Преобразует строку в JSON с URL decode.
 * @param value Значение
 */
export function deserialize(value: string): object {
	if (value && typeof value === "string") {
		try {
			return JSON.parse(decodeURIComponent(value));
		} catch (e) {
			return undefined;
		}
	}

	return null;
}

/**
 * Сделать первой букву заглавной
 * @param str строка
 */
export function toUpperFirstSymbol(str: string) {
	if (!str) {
		return undefined;
	}

	const result = str.charAt(0).toUpperCase() + str.substr(1);

	return result;
}

/**
 * ФОрматировать строку по заданному формату
 * @param mask маска
 * @param formattedStr текст который надо привести к определенному формату
 */
export function formatString(mask: string, formattedStr: number | string) {
	const str = `${formattedStr}`;
	let result = "";

	for (let im = 0, is = 0; im < mask.length && is < str.length; im++) {
		result += mask.charAt(im) === "X" ? str.charAt(is++) : mask.charAt(im);
	}

	return result;
}

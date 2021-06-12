import axios from "axios";

/**
 * Проверить параметры
 * @param url Урл
 * @param options Опции
 * @param reject Отказ
 * @param isNeedCheckOptions если надо проверить опции
 */
function checkParams(url: string, options: any, reject: any, isNeedCheckOptions = false) {
	if (!url) {
		reject(new Error("There is no URL provided for the request."));
	}

	if (!options && isNeedCheckOptions) {
		reject(new Error("There are no options provided for the request."));
	}
}

/**
 * HTTP post
 * @param url Url
 * @param data Тело запроса
 * @param options Доп. опции
 */
export function post<TResponse>(url: string, data: any, options: any) {
	return new Promise<TResponse>((resolve, reject) => {
		checkParams(url, options, reject, true);

		axios
			.post(url, data, options)
			.then(response => {
				if (response.status >= 200 && response.status < 400) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch(error => {
				if (error.data && error.data.message) {
					reject(error.data);
				}
				if (error.response && error.response.data) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
}

/**
 * HTTP get
 * @param url Url
 * @param options Доп. опции
 */
export function get<TResponse>(url: string, options: any) {
	return new Promise<TResponse>((resolve, reject) => {
		checkParams(url, options, reject);

		axios
			.get(url, options)
			.then(response => {
				if (response.status >= 200 && response.status < 400) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch(error => {
				if (error.data && error.data.message) {
					reject(error.data);
				}
				if (error.response && error.response.data) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
}

/**
 * HTTP put
 * @param url Url
 * @param data Тело запроса
 * @param options Доп. опции
 */
export function put<TResponse>(url: string, data: any, options: any) {
	return new Promise<TResponse>((resolve, reject) => {
		checkParams(url, options, reject, true);

		axios
			.put(url, data, options)
			.then(response => {
				if (response.status >= 200 && response.status < 400) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch(error => {
				if (error.data && error.data.message) {
					reject(error.data);
				}
				if (error.response && error.response.data) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
}

/**
 * HTTP del
 * @param url Url
 * @param options Доп. опции
 */
export function del<TResponse>(url: string, options: any) {
	return new Promise<TResponse>((resolve, reject) => {
		checkParams(url, options, reject, true);

		axios
			.delete(url, options)
			.then(response => {
				if (response.status >= 200 && response.status < 400) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch(error => {
				if (error.data && error.data.message) {
					reject(error.data);
				}
				if (error.response && error.response.data) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
}

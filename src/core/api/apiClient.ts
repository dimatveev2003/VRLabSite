import * as axiosClient from "./axiosClient";
import { serializeToQueryString } from "../utils/urlHelper";
import { cutUndefinedProperties, isEmpty } from "../utils/objectExtensions";

/**
 * Класс для отправки запросов к API
 */
export default class ApiClient implements IApiClient {
	/**
	 * Конфиг для апи
	 */
	apiClientConfig: IApiConfig;

	/**
	 * Конструктор
	 * @param apiClientConfig Конфигурация клиента к API
	 */
	constructor(apiClientConfig: IApiConfig) {
		this.apiClientConfig = apiClientConfig;
	}

	/**
	 * Строит абсолютный url к api
	 * @param url Относительный или абсолютный путь к API
	 * @param body Параметры
	 */
	buildAbsoluteApiUrl(url: string, body?: any): string {
		const absoluteUrl = `${this.apiClientConfig.apiEndpoint}${url}`;
		const pureBody = cutUndefinedProperties(body);

		if (isEmpty(pureBody)) {
			return absoluteUrl;
		}

		const serializedBody = serializeToQueryString(pureBody);

		if (absoluteUrl.indexOf("?") !== -1) {
			return `${absoluteUrl}&${serializedBody}`;
		}

		return `${absoluteUrl}?${serializedBody}`;
	}

	/**
	 * Добавляет параметр языка к дополнительным параметрам запроса
	 * @param options Дополнительные параметры запроса
	 */
	buildHeaders(options: any): object {
		const extendedOptions = Object.assign({}, options);

		extendedOptions.headers = Object.assign({}, extendedOptions.headers, {
			Accept: "application/json",
			Pragma: "no-cache",
			Language: this.apiClientConfig.language,
			SessionId: this.apiClientConfig.sessionId,
			AppDomain: this.apiClientConfig.appDomain || undefined,
			Authorization: this.apiClientConfig.accessToken ? `Bearer ${this.apiClientConfig.accessToken}` : undefined
		});

		extendedOptions.headers = cutUndefinedProperties(extendedOptions.headers);

		return extendedOptions;
	}

	/**
	 * Выполняет POST запрос к api
	 * @param url Относительный url к методу api
	 * @param body Параметры
	 * @param options Опции для header
	 */
	post<TRequest, TResponse>(url: string, body: TRequest, options: any = {}) {
		const extendOptions = this.buildHeaders(options);
		return axiosClient.post<TResponse>(this.buildAbsoluteApiUrl(url), body, extendOptions);
	}

	/**
	 * Выполняет GET запрос к api
	 * @param url Относительный url к методу api
	 * @param options Опции для header
	 */
	get<TResponse>(url: string, options: any = {}) {
		const extendOptions = this.buildHeaders(options);
		return axiosClient.get<TResponse>(this.buildAbsoluteApiUrl(url), extendOptions);
	}

	/**
	 * Выполняет GET запрос к api
	 * @param url Относительный url к методу api
	 * @param body Параметры
	 * @param options Опции для header
	 */
	getEx<TRequest, TResponse>(url: string, body: TRequest, options: any = {}) {
		const extendOptions = this.buildHeaders(options);
		return axiosClient.get<TResponse>(this.buildAbsoluteApiUrl(url, body), extendOptions);
	}
}

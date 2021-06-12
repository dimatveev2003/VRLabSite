/**
 * Клиент к Api
 */
interface IApiClient {
	/**
	 * Выполняет POST запрос к api
	 * @param url Относительный url к методу api
	 * @param body Параметры
	 * @param options Опции для header
	 */
	post: <TRequest, TResponse>(url: string, body: TRequest, options?: any) => Promise<TResponse>;

	/**
	 * Выполняет GET запрос к api
	 * @param url Относительный url к методу api
	 * @param options Опции для header
	 */
	get: <TResponse>(url: string, options?: any) => Promise<TResponse>;

	/**
	 * Выполняет GET запрос к api
	 * @param url Относительный url к методу api
	 * @param body Параметры
	 * @param options Опции для header
	 */
	getEx: <TRequest, TResponse>(url: string, body: TRequest, options?: any) => Promise<TResponse>;
}

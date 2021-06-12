/** Конфигурация клиента к API */
interface IApiConfig {
	/** Точка доступа api */
	apiEndpoint: string;

	/** Идентификатор сессии */
	sessionId: string;

	/** Язык */
	language: string;

	/** Авторизационный токен */
	accessToken: string;

	/** Домен */
	appDomain: string;
}

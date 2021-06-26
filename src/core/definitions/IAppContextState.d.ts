/** Общее состояние приложения */
interface IAppContextState {
	/** Токен авторизации */
	tokenId?: string;
	/** Сессия */
	sessionId?: string;
	/** Язык */
	language?: Languages;
	/** Конфиг приложения */
	config?: IAppSettings;
	/** Какая страница на данный момент открыта */
	pageNavigationState?: string;
	/** ОШиибки приложения */
	error?: any;
	/** Информация о клиенте */
	client?: IClientInfo;
}

/** Конфигурация приложения */
interface IAppConfig {
	/** Настройки приложения */
	appSettings: IAppConfigSettings;
	/** Настройки деплоя */
	buildSettings: IBuildConfigSettings;
}

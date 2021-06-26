import { isEmpty } from "core/utils/stringExtensions";

/**
 * Дефолтные настройки приложения
 */
const defaultConfig: IAppSettings = {
	apiEndpoint: process.env.NEXT_PUBLIC_APP_APIENDPOINT,
	lang: "ru"
};

/**
 * Инициализирует конфигурацию приложения
 * @param config Конфигурация приложения
 */
export function createAppConfigSettings(config?: IAppSettings): IAppSettings {
	if (!config) {
		return Object.assign({}, defaultConfig);
	}

	const result = Object.assign({}, defaultConfig, config);

	return result;
}

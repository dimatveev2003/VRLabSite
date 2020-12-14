interface IBuildConfigSettings {
	/** Путь по которому скипты будут доступны на сервере */
	publicPath: string;

	/** Опции сборки */
	options: {
		/** Минификация */
		minify: boolean;

		/** Скрипты для отладки */
		maps: boolean;
	};

	/** Настройки для тестирования виджета */
	widget: {
		/** Название виджета */
		title: string;

		/** Идентификатор HTML-контейнера приложения в DOM */
		appContainterId: string;
        
        /** Путь к апи */
        apiEndpoint: string;
	};
}

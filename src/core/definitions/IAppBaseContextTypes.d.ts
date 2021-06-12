/** Свойства контекста приложения  */
interface IAppBaseContextTypes {
	/** Функция выхода */
	exit?: () => void;
	/** Авторизован ли пользователь */
	isAuthenticated?: () => boolean;
	/** доступ к контексту */
	context?: IAppContextState;
}

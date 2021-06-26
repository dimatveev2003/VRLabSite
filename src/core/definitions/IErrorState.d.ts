/** ОШибка в приложении */
interface IErrorState {
	/** Тип ошибки */
	typeError?: number;

	/** Текст ошибки */
	errorMessage?: string;
}

/** Базовые свойства компонента */
interface BaseBlockProps {
	/** Блок */
	block?: string;
	/** Элемент */
	element?: string;
	/** Модификатор */
	modifier?: string | string[];
	/** Использовать основной стиль */
	isMainBlock?: boolean;
	/** Внешний класс */
	externalClass?: string;
}

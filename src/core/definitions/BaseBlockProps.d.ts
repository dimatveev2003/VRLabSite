/** Базовые свойства компонента */
interface BaseBlockProps {
	/** Блок */
	block?: BlockName;
	/** Элемент */
	element?: string;
	/** Модификатор */
	modifier?: string | string[];
	/** Использовать основной стиль */
	isMainBlock?: boolean;
	/** Внешний класс */
	externalClass?: string;
	/** Дочерние элементы */
	children?: React.ReactNode;
	/** Клик */
	onClick?: React.MouseEventHandler;
	/** ID */
	id?: string;
}

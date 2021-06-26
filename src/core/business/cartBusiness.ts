import ProductTypes from "core/enum/ProductTypes";

export const getCartProduct = (type: ProductTypes, product: IBundleModel | ILaboratoryModel) => {
	return {
		type: type,
		id: product.id,
		price: product.prices[0],
		name: product.name
	} as ICartProduct;
};

export const checkIfProductAdded = (type: ProductTypes, productId: number, productList: ICartProduct[]) => {
	const result = productList.some((p) => p.id === productId && p.type === type);

	return result;
};

export const getTypeString = (type: ProductTypes) => {
	switch (type) {
		case ProductTypes.bundle:
			return "Набор лабораторных работ";

		case ProductTypes.lab:
			return "Лабораторная работа";

		default:
			return "";
	}
};

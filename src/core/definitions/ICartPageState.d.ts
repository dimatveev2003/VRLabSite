interface ICartPageState {
	products?: ICartProduct[];
	amount?: number;
	currencyId?: number;
	isSuccessCreateOrder?: boolean;
	orderNumber?: number;
}

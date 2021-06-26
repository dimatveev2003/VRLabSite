interface ICreateOrderRequest {
	amount: number;
	currencyId: number;
	orderItems: IOrderItemModel[];
}

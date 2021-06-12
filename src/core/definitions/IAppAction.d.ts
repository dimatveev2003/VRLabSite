interface IGlobalStateAction<TAction> {
	type: string;
	payload: TAction;
}

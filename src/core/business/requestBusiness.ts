import { IOrderItemModel } from "core/definitions/IOrderItemModel";

export const getAuthRequest = (page: ILoginPageState): ILoginRequest => {
	return {
		login: page.login,
		password: page.password
	};
};

export const getRegisterRequest = (page: IRegistrationPageState): IRegisterRequest => {
	return {
		login: page.login,
		password: page.password,
		email: page.email,
		phone: page.phone,
		organizationName: page.organizationName
	};
};

export const getSaveNewDataRequest = (state: IGlobalAppState): ISaveClientInfoRequest => {
	return {
		email: state.homePage.email,
		phone: state.homePage.phone
	};
};

export const getChangePasswordRequest = (page: IHomePageState): IChangePasswordRequest => {
	return {
		newPassword: page.password
	};
};

export const getCreateOrderRequest = (page: ICartPageState): ICreateOrderRequest => {
	const items = page.products.map((p) => {
		return {
			type: p.type,
			id: p.id
		} as IOrderItemModel;
	});

	return {
		amount: page.amount,
		orderItems: items,
		currencyId: page.currencyId
	};
};

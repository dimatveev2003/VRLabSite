interface IApiMethods {
	register: (request: IRegisterRequest) => Promise<IRegisterResponse>;

	login: (request: ILoginRequest) => Promise<ILoginResponse>;

	clientInfo: () => Promise<IClientInfoResponse>;

	bundles: () => Promise<IBundlesResponse>;

	labs: () => Promise<ILaboratoriesResponse>;

	saveClientInfo: (request: ISaveClientInfoRequest) => Promise<ISaveClientInfoResponse>;

	changePassword: (request: IChangePasswordRequest) => Promise<IChangePasswordResponse>;
}

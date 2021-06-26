export default class ApiMethods implements IApiMethods {
	apiClient: IApiClient;

	constructor(apiClient: IApiClient) {
		this.apiClient = apiClient;
	}

	changePassword = (request: IChangePasswordRequest) => {
		const result = this.apiClient.post<IChangePasswordRequest, IChangePasswordResponse>(
			"/personal-area/client/change-password",
			request
		);

		return result;
	};

	saveClientInfo = (request: ISaveClientInfoRequest) => {
		const result = this.apiClient.post<ISaveClientInfoRequest, ISaveClientInfoResponse>(
			"/personal-area/client/update-client-info",
			request
		);

		return result;
	};

	bundles = () => {
		const result = this.apiClient.get<IBundlesResponse>("/personal-area/laboratories/get-all-bundles");

		return result;
	};

	labs = () => {
		const result = this.apiClient.get<ILaboratoriesResponse>("/personal-area/laboratories/get-all-labs");

		return result;
	};

	clientInfo = () => {
		const result = this.apiClient.get<IClientInfoResponse>("/personal-area/client/client-info");

		return result;
	};

	register = (request: IRegisterRequest) => {
		const result = this.apiClient.post<IRegisterRequest, IRegisterResponse>(
			"/personal-area/client/register-client",
			request
		);

		return result;
	};

	login = (request: ILoginRequest) => {
		const result = this.apiClient.getEx<ILoginRequest, ILoginResponse>("/personal-area/client/login-client", request);

		return result;
	};
}

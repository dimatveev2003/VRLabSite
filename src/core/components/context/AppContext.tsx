import { PropsWithChildren } from "react";
import { isAuthenticated } from "core/business/app/appAuth";
import AppContextProvider from "./AppContextProvider";

export default (props: PropsWithChildren<{}>) => {
	/**
	 * Данные для контекста
	 */
	const appBaseContextProviders: IAppBaseContextTypes = {
		isAuthenticated,
	};

	return <AppContextProvider.Provider value={appBaseContextProviders}>{props.children}</AppContextProvider.Provider>;
};

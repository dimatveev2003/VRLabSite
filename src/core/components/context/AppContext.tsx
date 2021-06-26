import React, { PropsWithChildren } from "react";
import { isAuthenticated } from "core/business/app/appAuth";
import AppContextProvider from "./AppContextProvider";
import { useDispatch, useSelector } from "core/business/hooks/commonHooks";
import { isEmpty } from "core/utils/stringExtensions";
import { clearToken, initSession } from "core/app/context/contextActions";

export default (props: PropsWithChildren<{}>) => {
	const dispatch = useDispatch();
	const context = useSelector((state) => state.appContext);

	/**
	 * Данные для контекста
	 */
	const appBaseContextProviders: IAppBaseContextTypes = {
		isAuthenticated,
		context,
		exit: () => dispatch(clearToken())
	};

	React.useEffect(() => {
		if (isEmpty(context.sessionId)) {
			dispatch(initSession(context.sessionId));
		}
	}, [dispatch, context.sessionId]);

	return <AppContextProvider.Provider value={appBaseContextProviders}>{props.children}</AppContextProvider.Provider>;
};

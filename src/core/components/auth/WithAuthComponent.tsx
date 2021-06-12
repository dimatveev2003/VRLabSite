import { useAppContextProvider } from "core/business/hooks/commonHooks";
import Router from "next/router";
import React from "react";

/**
 * Провеерка маршурта с авторизациией
 */
export default (WrappedComponent: any) => (props: React.PropsWithChildren<any>) => {
	const { isAuthenticated } = useAppContextProvider();    

	/** При каждом рендеринге вызыаем проверку авторизации для редиректа на логинг */
	React.useEffect(() => {
		if (!isAuthenticated()) {
			Router.push("/login");
		}
	});

	return !isAuthenticated() ? null : <WrappedComponent {...props} />;
};

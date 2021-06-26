import "../sass/common.scss";
import AppContext from "../core/components/context/AppContext";
import { useStore } from "../core/app/reducer/store";
import { Provider } from "react-redux";
import * as React from "react";
import { createAppConfigSettings } from "core/business/app/configSettings";
import { createAppContextState } from "core/business/app/appInitParams";

const MyApp = ({ Component, pageProps }) => {
	const config = createAppConfigSettings();
	const initAppContext = createAppContextState(config);
	const store = useStore(pageProps.initialReduxState, initAppContext);

	return (
		<Provider store={store}>
			<AppContext>
				<Component {...pageProps} />
			</AppContext>
		</Provider>
	);
};

export default MyApp;

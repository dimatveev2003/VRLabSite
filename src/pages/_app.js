import "../sass/common.scss";
import AppContext from "../core/components/context/AppContext";
import { createStore } from "../core/app/reducer/store";
import { Provider } from "react-redux";
import * as React from "react";

const MyApp = ({ Component, pageProps }) => {
	const store = createStore();

	return (
		<Provider store={store}>
			<AppContext>
				<Component {...pageProps} />
			</AppContext>
		</Provider>
	);
};

export default MyApp;

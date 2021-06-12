import AppContextProvider from "core/components/context/AppContextProvider";
import React from "react";

export function useAppContextProvider() {
	const result = React.useContext(AppContextProvider);

	return result;
}


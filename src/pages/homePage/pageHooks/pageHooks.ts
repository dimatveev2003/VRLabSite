import { useDispatch } from "core/business/hooks/commonHooks";
import React from "react";
import { initHomePageAction } from "../reducer/homeActions";

export const useHomePageInitialize = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(initHomePageAction());
	}, []);
};

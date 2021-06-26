import { setPageState } from "core/app/context/contextActions";
import { useDispatch, useSelector } from "core/business/hooks/commonHooks";
import pages from "core/business/pages";

import React from "react";
import { initLabsPageAction } from "../reducer/labsActions";

export const useLabPageInitialize = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(setPageState(pages.laboratories));
		dispatch(initLabsPageAction());
	}, []);
};

export const useLabPageState = () => {
	const state = useSelector((state) => state.laboratoriesPage);

	return state;
};

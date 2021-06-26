import { clearToken, setPageState } from "core/app/context/contextActions";
import { useDispatch } from "core/business/hooks/commonHooks";
import pages from "core/business/pages";

import React from "react";

export const useLoginPageInitialize = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(clearToken());
		dispatch(setPageState(pages.login));
	}, []);
};

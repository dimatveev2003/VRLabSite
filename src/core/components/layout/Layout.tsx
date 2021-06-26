import { useSelector } from "core/business/hooks/commonHooks";
import React from "react";
import Block from "../base/Block";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default (props: React.PropsWithChildren<unknown>) => {
	const state = useSelector((state) => state.appContext);

	return (
		<Block isMainBlock block="layout">
			<Header />
			{props.children}
			<Footer />
		</Block>
	);
};

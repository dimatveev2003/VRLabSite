import Block from "core/components/base/Block";
import * as React from "react";

export default (props: BaseBlockProps) => (
	<Block isMainBlock block="nav-bar" {...props}>
		{props.children}
	</Block>
);

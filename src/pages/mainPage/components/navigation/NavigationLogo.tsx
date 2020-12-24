import Block from "core/components/base/Block";
import * as React from "react";
import NavigationBlock from "./base/NavigationBlock";

export default () => (
	<NavigationBlock element="logowrapper">
		<NavigationBlock element="logowrapper2">
			<Block>
				<NavigationBlock element="logo">
					<NavigationBlock element="logo" modifier="text">
						Лаборатория виртуальной <br /> реальности
					</NavigationBlock>
				</NavigationBlock>
			</Block>
		</NavigationBlock>
	</NavigationBlock>
);

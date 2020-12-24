import * as React from "react";
import NavigationBlock from "./base/NavigationBlock";

export default () => (
	<NavigationBlock element="leftwrapper">
		<NavigationBlock element="leftmenuwrapper">
			<ul className="nav-bar__list">
				<li className="nav-bar__list_item">
					<a>О нас</a>
				</li>
				<li className="nav-bar__list_item">
					<a>Услуги</a>
				</li>
				<li className="nav-bar__list_item">
					<a>Контакты</a>
				</li>
			</ul>
		</NavigationBlock>
	</NavigationBlock>
);

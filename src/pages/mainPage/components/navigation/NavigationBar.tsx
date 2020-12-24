import * as React from "react";
import NavigationBlock from "./base/NavigationBlock";
import NavigationRightBlock from "./NavigationRightBlock";
import NavigationLeftMenu from "./NavigationLeftMenu";
import NavigationLogo from "./NavigationLogo";
import LandingBigImg from "../landingImg/LandingBigImg";

export default () => {
	return (
		<NavigationBlock isMainBlock block="nav-bar" modifier="positionabsolute">
			<NavigationBlock isMainBlock block="nav-bar" modifier={["maincontainer", "c12collumns"]}>
				<NavigationLogo />
                <NavigationLeftMenu />
                <NavigationRightBlock />
			</NavigationBlock>
		</NavigationBlock>
	);
};

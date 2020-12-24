import * as React from "react";
import About from "./components/about/About";
import LandingBigImg from "./components/landingImg/LandingBigImg";
import Motivating from "./components/motivating/Motivating";
import NavigationBar from "./components/navigation/NavigationBar";
import Offer from "./components/offer/Offer";
import Services from "./components/services/Services";

export default () => {
	return (
		<React.Fragment>
			<NavigationBar />
			<Offer />
			<LandingBigImg />
			<About />
			<Services />
			<Motivating />
		</React.Fragment>
	);
};

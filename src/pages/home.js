import WithAuthComponent from "../core/components/auth/WithAuthComponent";
import HomePage from "../pages/homePage/HomePage";

export default () => {
	return WithAuthComponent(<HomePage />)();
};

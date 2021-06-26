import WithAuthComponent from "../core/components/auth/WithAuthComponent";
import CartPage from "../pages/cartPage/CartPage";

export default () => {
	return WithAuthComponent(<CartPage />)();
};

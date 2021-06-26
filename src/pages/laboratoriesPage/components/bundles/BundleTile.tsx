import { ShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { checkIfProductAdded, getCartProduct } from "core/business/cartBusiness";
import { useDispatch, useSelector } from "core/business/hooks/commonHooks";
import { BundleBlock } from "core/components/helpers/BlockHelpers";
import ProductTypes from "core/enum/ProductTypes";
import { isEmpty } from "core/utils/objectExtensions";
import { removeProductAction, addProductAction } from "pages/cartPage/reducer/cartActions";
import BundleLabs from "./BundleLabs";

const BundleTile = (props: { bundle: IBundleModel }) => {
	const { bundle } = props;
	const dispatch = useDispatch();
	const cartPage = useSelector((state) => state.cartPage);

	const price = bundle.prices[0];
	const labs = bundle.laboratories;

	const isAdded = checkIfProductAdded(ProductTypes.bundle, bundle.id, cartPage.products);

	const handleCartClick = () => {
		const product = getCartProduct(ProductTypes.bundle, bundle);

		if (isAdded) {
			dispatch(removeProductAction(product));
		} else {
			dispatch(addProductAction(product));
		}
	};

	return (
		<BundleBlock modifier="tile">
			<BundleBlock modifier="title">{bundle.name}</BundleBlock>
			<BundleBlock modifier="desc">{bundle.description}</BundleBlock>

			{isEmpty(labs) ? null : <BundleLabs labs={labs} />}

			{isEmpty(price) ? null : (
				<BundleBlock modifier="price">
					{`${price.price} ${price.currency.currencySymbol}`}
					<BundleBlock onClick={handleCartClick} modifier="cart">
						{isAdded ? (
							<RemoveShoppingCart style={{ color: "#ffa273" }} />
						) : (
							<ShoppingCart style={{ color: "#ffa273" }} />
						)}
					</BundleBlock>
				</BundleBlock>
			)}
		</BundleBlock>
	);
};

export default BundleTile;

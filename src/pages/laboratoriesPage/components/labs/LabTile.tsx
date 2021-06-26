import { LabsLabBlock } from "core/components/helpers/BlockHelpers";
import { isEmpty } from "core/utils/stringExtensions";
import { isEmpty as isObjEmpty } from "core/utils/objectExtensions";
import LabVideo from "./LabVideo";
import { ShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "core/business/hooks/commonHooks";
import { checkIfProductAdded, getCartProduct } from "core/business/cartBusiness";
import ProductTypes from "core/enum/ProductTypes";
import { addProductAction, removeProductAction } from "pages/cartPage/reducer/cartActions";

const LabTile = (props: { lab: ILaboratoryModel }) => {
	const { lab } = props;
	const dispatch = useDispatch();
	const cartPage = useSelector((state) => state.cartPage);

	const price = lab.prices.find((price) => price.currency.shortName === "RUB");
	const isAdded = checkIfProductAdded(ProductTypes.lab, lab.id, cartPage.products);

	const handleCartClick = () => {
		const product = getCartProduct(ProductTypes.lab, lab);

		if (isAdded) {
			dispatch(removeProductAction(product));
		} else {
			dispatch(addProductAction(product));
		}
	};

	return (
		<LabsLabBlock modifier="tile">
			<LabsLabBlock modifier="title">{lab.name}</LabsLabBlock>
			<LabsLabBlock modifier="section">{`Раздел: ${lab.section}`}</LabsLabBlock>
			<LabsLabBlock modifier="desc">{lab.description}</LabsLabBlock>
			{isEmpty(lab.videoId) ? null : <LabVideo videoId={lab.videoId} />}

			{isObjEmpty(price) ? null : (
				<LabsLabBlock modifier="price">
					{`${price.price} ${price.currency.currencySymbol}`}
					<LabsLabBlock onClick={handleCartClick} modifier="cart">
						{isAdded ? (
							<RemoveShoppingCart style={{ color: "#ffa273" }} />
						) : (
							<ShoppingCart style={{ color: "#ffa273" }} />
						)}
					</LabsLabBlock>
				</LabsLabBlock>
			)}
		</LabsLabBlock>
	);
};

export default LabTile;

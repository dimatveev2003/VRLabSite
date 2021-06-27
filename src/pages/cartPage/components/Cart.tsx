import { useDispatch } from "core/business/hooks/commonHooks";
import { CartBlock } from "core/components/helpers/BlockHelpers";
import { isEmpty } from "core/utils/objectExtensions";
import { clearAction, createOrderAction } from "../reducer/cartActions";
import CartItem from "./CartItem";

const Cart = (props: { items: ICartProduct[]; amount: number }) => {
	const { items, amount } = props;
	const dispatch = useDispatch();
	const currencySymbol = items[0].price.currency.currencySymbol;

	const handleClear = () => {
		dispatch(clearAction());
	};

	const handleApplyButton = () => {
		dispatch(createOrderAction());
	};

	return (
		<CartBlock element="content">
			{items.map((item, index) => (
				<CartItem key={`cart_item_${index}`} item={item} index={index + 1} />
			))}

			<hr />

			<CartBlock element="total">
				<CartBlock element="total" modifier="label" isMainBlock={false}>
					Итого:
				</CartBlock>
				<CartBlock element="total" modifier="price" isMainBlock={false}>
					{`${amount} ${currencySymbol}`}
				</CartBlock>
			</CartBlock>

			<CartBlock element="button-box">
				<a onClick={handleClear} className="cart__clear">
					Очистить
				</a>
				<button onClick={handleApplyButton} className="cart__button">
					Подтвердить
				</button>
			</CartBlock>
		</CartBlock>
	);
};

export default Cart;

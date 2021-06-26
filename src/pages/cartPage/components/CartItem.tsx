import { getTypeString } from "core/business/cartBusiness";
import { CartBlock } from "core/components/helpers/BlockHelpers";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "core/business/hooks/commonHooks";
import { removeProductAction } from "../reducer/cartActions";

const CartItem = (props: { item: ICartProduct, index: number }) => {
	const { item, index } = props;
    const dispatch = useDispatch();

	const typeString = getTypeString(item.type);

    const handleClickRemove = () => {
        dispatch(removeProductAction(item));
    }

	return (
		<CartBlock element="item">
			<CartBlock element="item" modifier="number" isMainBlock={false}>
				{index}
			</CartBlock>

			<CartBlock isMainBlock={false} element="item" modifier="info">
				<CartBlock isMainBlock={false} element="item" modifier="name">
					{item.name}
				</CartBlock>
				<CartBlock isMainBlock={false} element="item" modifier="type">
					{`Тип: ${typeString}`}
				</CartBlock>
			</CartBlock>
            
            <CartBlock onClick={handleClickRemove} isMainBlock={false} element="item" modifier="remove">
                <DeleteIcon style={{ color: "#ffa273" }} />
            </CartBlock>
		</CartBlock>
	);
};

export default CartItem;

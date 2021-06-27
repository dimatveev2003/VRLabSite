import { useDispatch, useSelector } from "core/business/hooks/commonHooks";
import ModalPopup from "core/components/base/ModalPopup";
import { CartBlock, LayoutBlock } from "core/components/helpers/BlockHelpers";
import Layout from "core/components/layout/Layout";
import { isEmpty } from "core/utils/objectExtensions";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";
import { useCartPageInitialize } from "./pageHooks/pageHooks";
import { createOrderSuccessAction } from "./reducer/cartActions";

export default () => {
	const pageState = useSelector((s) => s.cartPage);
	const dispatch = useDispatch();

	useCartPageInitialize();

	const handleClosePopup = () => {
		dispatch(createOrderSuccessAction(false));
	};

	return (
		<Layout>
			<LayoutBlock element="content">
				<CartBlock>
					<h1>Корзина</h1>
					<hr />

					<ModalPopup
						onClose={handleClosePopup}
						isOpen={pageState.isSuccessCreateOrder}
						title="Заказ оформлен"
						hasCloseButton>
						{`Заказ успешно оформлен. Ожидайте, с вами свяжется контактное лицо! Номер вашего заказа: ${pageState.orderNumber}.`}
					</ModalPopup>
					{isEmpty(pageState.products) || pageState.products.length === 0 ? (
						<EmptyCart />
					) : (
						<Cart amount={pageState.amount} items={pageState.products} />
					)}
				</CartBlock>
			</LayoutBlock>
		</Layout>
	);
};

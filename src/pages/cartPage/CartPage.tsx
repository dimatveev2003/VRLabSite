import { useSelector } from "core/business/hooks/commonHooks";
import { CartBlock, LayoutBlock } from "core/components/helpers/BlockHelpers";
import Layout from "core/components/layout/Layout";
import { isEmpty } from "core/utils/objectExtensions";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";

export default () => {
	const pageState = useSelector((s) => s.cartPage);

	return (
		<Layout>
			<LayoutBlock element="content">
				<CartBlock>
					<h1>Корзина</h1>
					<hr />

					{isEmpty(pageState.products) || pageState.products.length === 0 ? (
						<EmptyCart />
					) : (
						<Cart items={pageState.products} />
					)}
				</CartBlock>
			</LayoutBlock>
		</Layout>
	);
};

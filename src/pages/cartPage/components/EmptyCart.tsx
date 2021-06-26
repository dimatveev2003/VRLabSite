import pages from "core/business/pages";
import { CartBlock } from "core/components/helpers/BlockHelpers";
import Link from "next/link";
import CartItem from "./CartItem";

const EmptyCart = () => {
	return (
		<CartBlock element="empty">
			Корзина пуста, пожалуйста, выберите продукты на странице &nbsp;
			<Link href={pages.laboratories}>лабораторных</Link>&nbsp;
			работ
		</CartBlock>
	);
};

export default EmptyCart;

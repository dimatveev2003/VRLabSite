import { HeaderMenuBlock } from "../../helpers/BlockHelpers";
import MenuItem from "./MenuItem";
import pages from "core/business/pages";
import { useSelector } from "core/business/hooks/commonHooks";

export default (props: { currentPage: string }) => {
	const { currentPage } = props;
	const cartPage = useSelector((s) => s.cartPage);

	const count = cartPage.products.length;

	return (
		<HeaderMenuBlock>
			<MenuItem label="Главная" pageLink={pages.home} isSelected={currentPage === pages.home} />
			<MenuItem label="Лабораторные" pageLink={pages.laboratories} isSelected={currentPage === pages.laboratories} />
			<MenuItem
				isHasCounter={count > 0}
				count={count}
				label="Корзина"
				pageLink={pages.cart}
				isSelected={currentPage === pages.cart}
			/>
		</HeaderMenuBlock>
	);
};

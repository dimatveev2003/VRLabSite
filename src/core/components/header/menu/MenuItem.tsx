import { HeaderMenuBlock } from "../../helpers/BlockHelpers";
import Link from "next/link";

interface MenuItemProps {
	isSelected?: boolean;
	label: string;
	pageLink?: string;
	isHasCounter?: boolean;
	count?: number;
}

export default (props: MenuItemProps) => {
	const { isSelected, label, pageLink, isHasCounter, count } = props;

	return (
		<HeaderMenuBlock isMainBlock={false} modifier={isSelected ? ["element", "element-selected"] : "element"}>
			<Link href={isSelected ? "#" : pageLink}>{label}</Link>
			{isHasCounter && count > 0 ? <span className="header__menu_counter">{count}</span> : null}
		</HeaderMenuBlock>
	);
};

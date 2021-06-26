import { getBlockStyle } from "core/business/componentBusiness/baseComponentBusiness";

interface BlockProps extends BaseBlockProps {}

export default (props: BlockProps) => {
	const styles = getBlockStyle(props);

	return <div id={props.id} onClick={props.onClick} className={styles}>{props.children}</div>;
};

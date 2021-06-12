import { getBlockStyle } from "core/business/componentBusiness/baseComponentBusiness";

interface BlockProps extends BaseBlockProps {}

export default (props: BlockProps) => {
	const styles = getBlockStyle(props);

	return <div className={styles}>{props.children}</div>;
};

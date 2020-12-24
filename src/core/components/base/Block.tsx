import { getBlockStyle } from "core/business/componentBusiness/baseComponentBusiness";
import * as React from "react";

interface BlockProps extends BaseBlockProps {}

export default (props: React.PropsWithChildren<BlockProps>) => {
	const styles = getBlockStyle(props);

	return <div className={styles}>{props.children}</div>;
};

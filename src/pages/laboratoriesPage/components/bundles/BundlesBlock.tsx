import { LabsBlock } from "core/components/helpers/BlockHelpers";
import BundleTile from "./BundleTile";

const BundlesBlock = (props: { bundles: IBundleModel[] }) => {
	return (
		<LabsBlock element="bundles">
			<h1 className="labs__title">Наборы</h1>
			<LabsBlock element="bundles" modifier="row">
				{props.bundles.map((bundle, id) => (
					<BundleTile bundle={bundle} key={`${bundle.name}_${id}`} />
				))}
			</LabsBlock>
		</LabsBlock>
	);
};

export default BundlesBlock;

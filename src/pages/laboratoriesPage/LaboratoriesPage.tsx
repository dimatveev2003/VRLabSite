import Block from "core/components/base/Block";
import { LabsBlock, LayoutBlock } from "core/components/helpers/BlockHelpers";
import Layout from "core/components/layout/Layout";
import { useLabPageInitialize, useLabPageState } from "./pageHooks/pageHooks";
import BundlesBlock from "./components/bundles/BundlesBlock";
import { isEmpty } from "core/utils/objectExtensions";
import LabBlock from "./components/labs/LabsBlock";

export default () => {
	useLabPageInitialize();
	const page = useLabPageState();

	return (
		<Layout>
			<LayoutBlock element="content">
				<LabsBlock>
					{page.isBundlesFetch || isEmpty(page.bundles) ? <Block isMainBlock block="loader" element="labs" /> : <BundlesBlock bundles={page.bundles} />}
					{page.isLabsFetch || isEmpty(page.laboratories) ? <Block isMainBlock block="loader" element="labs" /> : <LabBlock labs={page.laboratories} />}
				</LabsBlock>
			</LayoutBlock>
		</Layout>
	);
};

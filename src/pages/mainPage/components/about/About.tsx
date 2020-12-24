import { MainAboutBlock } from "core/components/helpers/BlockHelpers";
import * as React from "react";

export default () => (
	<MainAboutBlock>
		<MainAboutBlock element="inner">
			<MainAboutBlock element="container" externalClass="">
				<MainAboutBlock isMainBlock={false} element="container" modifier="left">
					<MainAboutBlock isMainBlock={false} element="container" modifier="left-title">
						РХТУ им. Д.И. Менделеева
					</MainAboutBlock>
					<MainAboutBlock isMainBlock={false} element="container" modifier="left-keywords">
						кафедра информационных компьютерных технологий
					</MainAboutBlock>
				</MainAboutBlock>
				<MainAboutBlock isMainBlock={false} element="container" modifier="right">
					<MainAboutBlock isMainBlock={false} element="container" modifier="right-desc">
						Основана в 2001 году. Кафедра взаимодействует с российскими и зарубежными мировыми лидерами IT-индустрии,
						обеспечивающих реальную практику и последующее гарантированное трудоустройство студентам и выпускникам. На
						кафедре используются передовые информационные и мультимедиа технологии.
					</MainAboutBlock>
				</MainAboutBlock>
			</MainAboutBlock>
		</MainAboutBlock>
	</MainAboutBlock>
);

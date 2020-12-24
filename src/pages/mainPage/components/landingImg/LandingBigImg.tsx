import * as React from "react";
import { LandingImgBlock } from "core/components/helpers/BlockHelpers";

export default () => (
	<LandingImgBlock>
		<LandingImgBlock element="inner">
			<LandingImgBlock element="img-block">
				<img src="/main-big-img.jpg" className="landing-img__img-width" />
			</LandingImgBlock>
		</LandingImgBlock>
	</LandingImgBlock>
);

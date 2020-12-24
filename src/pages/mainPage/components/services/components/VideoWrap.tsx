import { MainServicesBlock } from "core/components/helpers/BlockHelpers";
import * as React from "react";
import YouTube from "react-youtube";
import { Options } from "react-youtube";

interface VideoWrapProps {
	videoId: string;
}

export default (props: VideoWrapProps) => {
	const options: Options = {
		playerVars: {
            showinfo: 0,
            modestbranding: 1
		}
	};

	return (
		<MainServicesBlock isMainBlock={false} element="container" modifier="row-item">
			<YouTube opts={options} videoId={props.videoId} className="main-services__container_row-item" />
		</MainServicesBlock>
	);
};

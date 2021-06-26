import { LabsLabBlock } from "core/components/helpers/BlockHelpers";
import YouTube, { Options } from "react-youtube";

const LabVideo = (props: { videoId: string }) => {
	const { videoId } = props;
	const options: Options = {
		playerVars: {
			showinfo: 0,
			modestbranding: 1
		}
	};

	return (
		<LabsLabBlock modifier="video">
			<YouTube opts={options} videoId={videoId} className="labs__lab_video" />
		</LabsLabBlock>
	);
};

export default LabVideo;

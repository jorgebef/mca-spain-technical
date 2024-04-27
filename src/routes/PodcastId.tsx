import { useParams } from "react-router-dom";

export const PodcastId = () => {
	let { podcastId } = useParams();

	return (
		<div>
			<div>{podcastId}</div>
		</div>
	);
};

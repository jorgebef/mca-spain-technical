import { useParams } from "react-router-dom";
import { fetchPodcastTracks } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { TrackResult } from "../../types/api";
import styles from "./PodcastEpisode.module.css";

export const PodcastEpisode = () => {
	const { podcastId, episodeId } = useParams();

	const [episodeData, setEpisodeData] = useState<TrackResult | undefined>(
		undefined,
	);

	const testDescription = "kekekeke <br/> <div>lulululul</div>";

	const { data, error, isLoading } = useQuery({
		queryKey: ["trackList", podcastId],
		queryFn: () => fetchPodcastTracks(podcastId),
		// queryFn: () =>
		// 	fetchPodcastTracks(podcastId).then((r) =>
		// 		r.find((e: any) => e.trackId === episodeId),
		// 	),
	});

	useEffect(() => {
		if (data === undefined || error || isLoading) return;
		console.log("Episode: ");
		const selectedEpisode = data.find(
			(e: TrackResult) => String(e.trackId) === episodeId,
		);
		console.log(selectedEpisode);

		setEpisodeData(selectedEpisode);
	}, [error, data]);

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (episodeData === undefined) return <div>No data</div>;

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<h1>{episodeData.trackName}</h1>
				<p dangerouslySetInnerHTML={{ __html: episodeData.description }} />
				<audio controls src={episodeData.episodeUrl}></audio>
			</div>
		</div>
	);
};

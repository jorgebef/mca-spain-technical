import { Link, useParams } from "react-router-dom";
import styles from "./PodcastTracks.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchPodcastTracks } from "../lib/api";
import { millisecondsToDuration, stringToDate } from "../lib/util";

export const PodcastTracks = () => {
	const { podcastId = "" } = useParams();

	const { data, error, isLoading } = useQuery({
		queryKey: ["trackList", podcastId],
		queryFn: () => fetchPodcastTracks(podcastId),
	});

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined) return <div>No data</div>;

	console.log(data);

	return (
		<div className={styles.container}>
			<div className={styles.episodeCount}>Episodes: {data.resultCount}</div>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Date</th>
						<th className={styles.duration}>Duration</th>
					</tr>
				</thead>
				<tbody>
					{data.results.map((track: any, i: number) => (
						<tr key={track.trackName + i}>
							<td>
								<Link to={`/podcast/${podcastId}/episode/${track.title}`}>
									{track.trackName}
								</Link>
							</td>
							<td className={styles.date}>{stringToDate(track.releaseDate)}</td>
							<td className={styles.duration}>
								{millisecondsToDuration(track.trackTimeMillis)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

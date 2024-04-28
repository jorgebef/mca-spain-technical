import { Link, useParams } from "react-router-dom";
import styles from "./PodcastId.module.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchPodcastTracks } from "../lib/api";

export const PodcastId = () => {
	const { podcastId = "" } = useParams();

	const { data, error, isLoading } = useQuery({
		queryKey: ["trackList", podcastId],
		queryFn: () => fetchPodcastTracks(podcastId),
	});

	useEffect(() => {
		if (error || isLoading || data === undefined) return;
		console.log(data);
	}, [data]);

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined) return <div>No data</div>;

	return (
		<div className={styles.container}>
			<div className={styles.episodeCount}>Episodes: {data.resultCount}</div>
			<table>
				<thead>
					<tr>
						<th>
							<b>Title</b>
						</th>
						<th>
							<b>Date</b>
						</th>
						<th>
							<b>Duration</b>
						</th>
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
							{/* <td>{track.date}</td> */}
							{/* <td>{track.duration}</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

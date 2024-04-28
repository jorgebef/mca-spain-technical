import { useQuery } from "@tanstack/react-query";
import { fetchTop100 } from "../../lib/api";
import styles from "./PodcastSidebar.module.css";
import { Link, useParams } from "react-router-dom";
import { Top100Result } from "../../types/api";

export const PodcastSidebar = () => {
	const { podcastId } = useParams();

	const { data, error, isLoading } = useQuery({
		queryKey: ["top100", podcastId],
		queryFn: () =>
			fetchTop100().then((r) =>
				r.find(
					(podcast: Top100Result) =>
						podcast.id.attributes["im:id"] === podcastId,
				),
			),
	});

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined) return <div className={styles.sidebar}>No data</div>;

	return (
		<div className={styles.sidebar}>
			<Link to={`/podcast/${podcastId}`}>
				<img src={data["im:image"][2].label} />
			</Link>
			<div className={styles.separator}></div>
			<Link to={`/podcast/${podcastId}`} className={styles.info}>
				<b>{data.title.label}</b>
				<i>by {data["im:artist"].label}</i>
			</Link>
			<div className={styles.separator}></div>
			<div className={styles.info}>
				<b>Description:</b>
				<i>{data.summary.label}</i>
			</div>
		</div>
	);
};

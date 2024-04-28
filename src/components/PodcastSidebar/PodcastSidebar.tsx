import { useQuery } from "@tanstack/react-query";
import { fetchPodcastById } from "../../lib/api";
import styles from "./PodcastSidebar.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PodcastSidebar = () => {
	const { podcastId } = useParams();

	const { data, error, isLoading } = useQuery({
		queryKey: ["podcastId", podcastId],
		queryFn: () => fetchPodcastById(podcastId),
	});

	useEffect(() => {
		if (!data) return;
		console.log("Podcast: ");
		console.log(data);
	}, [data]);

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined) return <div className={styles.sidebar}>No data</div>;

	return (
		<div className={styles.sidebar}>
			<img src={data.artworkUrl600} />
			<div className={styles.separator}></div>
			<div className={styles.info}>
				<b>{data.trackName}</b>
				<i>by {data.artistName}</i>
			</div>
			<div className={styles.separator}></div>
			<div className={styles.info}>
				<b>Description:</b>
				<i>{data.collectionName}</i>
			</div>
		</div>
	);
};

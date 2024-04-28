import { useQuery } from "@tanstack/react-query";
import { fetchPodcastById } from "../../lib/api";
import styles from "./PodcastSidebar.module.css";

type PodcastSidebarProps = {
	podcastId: string;
};

export const PodcastSidebar = ({ podcastId }: PodcastSidebarProps) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["podcastId", podcastId],
		queryFn: () => fetchPodcastById(podcastId),
	});

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

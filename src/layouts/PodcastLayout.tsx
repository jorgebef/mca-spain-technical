import { Outlet, useParams } from "react-router-dom";
import styles from "./PodcastLayout.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchPodcastById } from "../lib/api";

export const PodcastLayout = () => {
	const { podcastId } = useParams();

	const { data, error, isLoading } = useQuery({
		queryKey: ["podcastId", podcastId],
		queryFn: () => fetchPodcastById(podcastId),
	});

	// useEffect(() => {
	// 	if (error || isLoading || data === undefined) return;
	// 	console.log(data);
	// }, [data]);

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined) return <div>No data</div>;
	// console.log(data);

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<img src="https://placehold.co/600x400/000000/FFFFFF/png" />
				<div className={styles.separator}></div>
				<div className={styles.info}>
					<b>{data.trackName}</b>
					<i>{data.artistName}</i>
				</div>
				<div className={styles.separator}></div>
				<div className={styles.info}>
					<b>Description:</b>
					<i>Description</i>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

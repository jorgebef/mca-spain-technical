import { Outlet, useParams } from "react-router-dom";
import styles from "./PodcastLayout.module.css";
import { PodcastSidebar } from "../components/PodcastSidebar/PodcastSidebar";

export const PodcastLayout = () => {
	const { podcastId = "" } = useParams();

	return (
		<div className={styles.container}>
			<PodcastSidebar podcastId={podcastId} />
			<Outlet />
		</div>
	);
};

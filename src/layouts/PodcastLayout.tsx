import { Outlet } from "react-router-dom";
import styles from "./PodcastLayout.module.css";
import { PodcastSidebar } from "@/components/PodcastSidebar/PodcastSidebar";

export const PodcastLayout = () => {
	return (
		<div className={styles.container}>
			<PodcastSidebar />
			<Outlet />
		</div>
	);
};

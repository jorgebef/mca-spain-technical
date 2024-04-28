import { Link, useParams } from "react-router-dom";
import styles from "./PodcastId.module.css";

export const PodcastId = () => {
	const { podcastId } = useParams();

	return (
		<div className={styles.container}>
			<div className={styles.episodeCount}>Episodes: XX</div>
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
					{[
						{ title: "laksjdf", date: "laksdjf", duration: "alskdfj" },
						{ title: "laksjdf", date: "laksdjf", duration: "alskdfj" },
						{ title: "laksjdf", date: "laksdjf", duration: "alskdfj" },
						{ title: "laksjdf", date: "laksdjf", duration: "alskdfj" },
						{ title: "laksjdf", date: "laksdjf", duration: "alskdfj" },
					].map((episode, i) => (
						<tr key={episode.title + i}>
							<td>
								<Link to={`/podcast/${podcastId}/episode/${episode.title}`}>
									{episode.title}
								</Link>
							</td>
							<td>{episode.date}</td>
							<td>{episode.duration}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

import { useParams } from "react-router-dom";
import { fetchEpisodeById } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const PodcastEpisode = () => {
	const { episodeId } = useParams();

	const { data, error, isLoading } = useQuery({
		queryKey: ["episode", episodeId],
		queryFn: () => fetchEpisodeById(episodeId),
	});
	useEffect(() => {
		console.log("Episode: ");
		console.log(data);
	}, [error, data]);

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined) return <div>No data</div>;

	return (
		<div>
			<div>Episode {episodeId}</div>
		</div>
	);
};

import { useEffect } from "react";
import styles from "./Top100Grid.module.css";
import { useHomeCtx } from "../../routes/Home/Home";
import { useQuery } from "@tanstack/react-query";
import { fetchTop100 } from "../../lib/api";
import type { Top100Result } from "../../types/api";
import { filterArray } from "../../lib/util";
import { Link } from "react-router-dom";

export const Top100Grid = () => {
	const { results, setResults, query } = useHomeCtx();

	const { data, isError, isPending } = useQuery({
		queryKey: ["top100"],
		queryFn: () => fetchTop100(),
	});

	useEffect(() => {
		if (isError || isPending || data === undefined) return;
		const newResult = filterArray<Top100Result>(data, "title.label", query);
		setResults(newResult);
		console.log(data);
	}, [data, query]);

	if (isError) return <div>Error!!</div>;
	if (isPending) return <div>Loading...</div>;

	if (data === undefined)
		return <div className={styles.container}>No data</div>;

	return (
		<ul className={styles.container}>
			{results.map((podcast, i) => (
				<li key={podcast.id.attributes["im:id"] + i} className={styles.cell}>
					<Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
						<div className={styles.imgWrapper}>
							<img
								src={podcast["im:image"][2].label}
								alt={podcast.title.label}
							/>
						</div>
						<h4 className={styles.title}>{podcast.title.label}</h4>
						<span className={styles.summary}>
							Author: <b>{podcast["im:artist"].label}</b>
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

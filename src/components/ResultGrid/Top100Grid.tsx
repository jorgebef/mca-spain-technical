import { useEffect } from "react";
import styles from "./Top100Grid.module.css";
import { useHomeCtx } from "../../routes/Home";
import { useQuery } from "@tanstack/react-query";
import { fetchTop100 } from "../../lib/api";
import type { Top100Result } from "../../types/api";
import { filterArray } from "../../lib/util";
import { Link } from "react-router-dom";

export const Top100Grid = () => {
	const { results, setResults, query } = useHomeCtx();

	const { data, error, isLoading } = useQuery({
		queryKey: ["top100"],
		queryFn: () => fetchTop100(),
	});

	useEffect(() => {
		if (error || isLoading || data === undefined) return;
		const newResult = filterArray<Top100Result>(data, "title.label", query);
		setResults(newResult);
	}, [data, query]);

	if (error) return <div>Error!!</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data === undefined)
		return <div className={styles.container}>No data</div>;

	return (
		<ul className={styles.container}>
			{results.map((res, i) => (
				<li key={res.id.attributes["im:id"] + i} className={styles.cell}>
					<Link to={`/podcast/${res.id.attributes["im:id"]}`}>
						<div className={styles.imgWrapper}>
							<img src={res["im:image"][0].label} alt={res.title.label} />
						</div>
						<h4 className={styles.title}>{res.title.label}</h4>
						<span className={styles.summary}>
							Author: <b>{res["im:artist"].label}</b>
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

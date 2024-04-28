import { useContext, useEffect } from "react";
import s from "./Top100Grid.module.css";
import { HomeCtx } from "../../routes/Home";
import { useQuery } from "@tanstack/react-query";
import { fetchTop100 } from "../../lib/api";
import type { Top100Result } from "../../types/api";
import { filterArray } from "../../lib/util";
import { Link } from "react-router-dom";

interface ResultsProps {
	query: string;
}

export const Top100Grid = ({ query }: ResultsProps) => {
	const { results, setResults } = useContext(HomeCtx);

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
	if (data === undefined) return <div className={s.container}>No data</div>;

	return (
		<ul className={s.container}>
			{results.map((res, i) => (
				<li key={res.id.attributes["im:id"] + i} className={s.cell}>
					<Link to={`/podcast/${res.id.attributes["im:id"]}`}>
						<div className={s.imgWrapper}>
							<img src={res["im:image"][0].label} alt={res.title.label} />
						</div>
						<h4 className={s.title}>{res.title.label}</h4>
						<span className={s.summary}>
							Author: <b>{res["im:artist"].label}</b>
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

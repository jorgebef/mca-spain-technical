import { Dispatch, createContext, useState } from "react";
import { ResultGrid } from "../components/ResultGrid/ResultGrid";
import s from "./Home.module.css";
import { Top100Result } from "../types/api";

type HomeCtxProps = {
	results: Top100Result[];
	setResults: Dispatch<Top100Result[]>;
};

export const HomeCtx = createContext({} as HomeCtxProps);

export const Home = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<Top100Result[]>([]);

	return (
		<HomeCtx.Provider value={{ results, setResults }}>
			<div className={s.searchbox}>
				<span>{results.length}</span>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Filter podcasts..."
				/>
			</div>

			<ResultGrid query={query} />
		</HomeCtx.Provider>
	);
};

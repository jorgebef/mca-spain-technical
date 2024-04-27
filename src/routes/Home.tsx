import { Dispatch, createContext, useState } from "react";
import s from "./Home.module.css";
import { Top100Result } from "../types/api";

type HomeCtxProps = {
	results: any[];
	setResults: Dispatch<Top100Result[]>;
};

export const HomeCtx = createContext({} as HomeCtxProps);

export const Home = () => {
	const [query, setQuery] = useState("");

	return (
			<div className={s.searchbox}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Filter podcasts..."
				/>
			</div>

	);
};

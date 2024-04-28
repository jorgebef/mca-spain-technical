import { Dispatch, createContext, useContext, useState } from "react";
import { Top100Grid } from "../../components/ResultGrid/Top100Grid";
import { Top100Result } from "../../types/api";
import { SearchBar } from "../../components/SearchBar/SearchBar";

type HomeCtxProps = {
	results: Array<Top100Result>;
	setResults: Dispatch<Array<Top100Result>>;
	query: string;
	setQuery: Dispatch<string>;
};

export const HomeCtx = createContext({} as HomeCtxProps);
export const useHomeCtx = () => useContext(HomeCtx);

export const Home = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<Top100Result[]>([]);

	return (
		<HomeCtx.Provider value={{ results, setResults, query, setQuery }}>
			<SearchBar />
			<Top100Grid />
		</HomeCtx.Provider>
	);
};

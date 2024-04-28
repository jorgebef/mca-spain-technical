import { useHomeCtx } from "../../routes/Home";
import s from "./SearchBar.module.css";

export const SearchBar = () => {
	const { results, query, setQuery } = useHomeCtx();

	return (
		<div className={s.searchbox}>
			<span>{results.length}</span>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Filter podcasts..."
			/>
		</div>
	);
};

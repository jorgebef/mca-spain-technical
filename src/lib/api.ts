import { Top100Result } from "../types/api";
import { sleep } from "./util";

// Función para fetchear el top 100 usado en la home page
// devuelve una promise para poder usarse directamente en
// React Query y controlar estados con ese paquete
export const fetchTop100 = () => {
	console.log("FETCHING TOP  100!!!");
	const promise: Promise<Top100Result[]> = fetch(
		"https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error fetching!!");
			}
			return res.json();
		})
		.then((r) => r.feed.entry);

	return promise;
};

export const fetchPodcastById = async (podcastId: string | undefined) => {
	await sleep(2000);
	const promise:Promise<any> = fetch(`https://itunes.apple.com/lookup?id=${podcastId}`)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error fetching!!");
			}
			return res.json();
		})
		.then((r) => r.results[0]);
	return promise;
};

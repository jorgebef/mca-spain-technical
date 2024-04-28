import { Top100Result } from "../types/api";
// import { sleep } from "./util";

const allOrigins = (url: string) =>
	`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

// Función para fetchear el top 100 usado en la home page
// devuelve una promise para poder usarse directamente en
// React Query y controlar estados con ese paquete
export const fetchTop100 = async () => {
	// await sleep(2000);
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
	// await sleep(2000);
	const promise: Promise<any> = fetch(
		allOrigins(`https://itunes.apple.com/lookup?id=${podcastId}`),
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error fetching!!");
			}
			return res.json();
		})
		.then((r) => JSON.parse(r.contents).results[0]);
	return promise;
};

export const fetchPodcastTracks = async (podcastId: string | undefined) => {
	// await sleep(2000);
	const promise: Promise<any> = fetch(
		allOrigins(
			`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`,
		),
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error fetching!!");
			}
			return res.json();
		})
		.then((r) => JSON.parse(r.contents));
	return promise;
};

import { Top100Result, TrackResult } from "../types/api";

const allOrigins = (url: string) =>
	`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

// const corsAnywhere = (url: string) =>
// 	`https://cors-anywhere.herokuapp.com/${url}`;

// Función para fetchear el top 100 usado en la home page
// devuelve una promise para poder usarse directamente en
// React Query y controlar estados con ese paquete
export const fetchTop100 = async () => {
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

export const fetchPodcastTracks = (podcastId: string | undefined) => {
	const promise: Promise<TrackResult[]> = fetch(
		allOrigins(
			// He puesto límite más alto (200) que permite la API de apple
			// es muy subóptimo, ya que tarda mucho en cargar, pero en
			// el ejercicio se pide que se muestren todos los capítulos
			// que no es posible de una llamada, habría que usar paginación
			// y varias llamadas con su correspondiente cache
			`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`,
		),
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error fetching!!");
			}
			return res.json();
		})
		// El primer elemento siempre es el descriptivo del podcast en general
		// por lo que podemos descartarlo
		.then((r) => (JSON.parse(r.contents).results as Array<any>).slice(1));
	return promise;
};

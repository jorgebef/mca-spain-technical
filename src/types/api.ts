export type Top100Result = {
	id: { attributes: { "im:id": string }; label: string };
	title: { label: string };
	"im:artist": { label: string };
	"im:image": { label: string }[];
	// Para dar la oportunidad de acceder a otras propiedades
	// TODO eliminarlo y completar con el tipado correcto
	// basado en la respuesta de la API
	[k: string]: any;
};

export type TrackResult = {
	trackId: string;
	episodeUrl: string;
	trackTimeMillis: number;
	releaseDate: string;
	description: string;
	trackName: string;
	// Para dar la oportunidad de acceder a otras propiedades
	// TODO eliminarlo y completar con el tipado correcto
	// basado en la respuesta de la API
	[k: string]: any;
};

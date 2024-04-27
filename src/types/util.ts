// Tipado para la key anidada dentro del tipo genérico T
// usado para que tengamos algo de type safety al llamar
// la función que use este tipo
// Usado en la función `filterArray` usada para filtrar
// los podcasts en la página inicial
// https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
export type NestedKeyOf<T extends object> = {
	[K in keyof T & string]: T[K] extends object
		? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
		: K;
}[keyof T & string];

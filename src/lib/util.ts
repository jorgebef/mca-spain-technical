import { NestedKeyOf } from "../types/util";

// Unir las clases para usar CSS modules más fácilmente
export const cn = (...classList: string[]) => {
	return classList.join(" ");
};

// Artificialmente crear un delay para pruebas
export const sleep = (milliseconds: number) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));

// Acceder al valor de la nested key proporcionada con
// dot notation, tipo "key1.key2"
// https://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
export function getDescendantProp(obj: any, key: string) {
	var arr = key.split(".");
	while (arr.length && (obj = obj[arr.shift()!]));
	return obj;
}

// Filtrar elementos del array cuyo valor de la key
// anidada `nestedKey` sea igual a `val`
export const filterArray = <T extends object>(
	array: T[],
	nestedKey: NestedKeyOf<T>,
	val: string,
) => {
	const filteredResult = array.filter((element) => {
		const value: string = getDescendantProp(element, nestedKey);
		// para hacer el filtrado case agnostic
		return value.toLowerCase().includes(val.toLowerCase());
	});
	return filteredResult;
};

export const stringToDate = (input: string) => {
	const result = new Date(input).toLocaleDateString(undefined, {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	});
	return result;
};

// Conversión de tiempo en Milisegundos proveniente de la API
// a un formato legible para personas
// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
export const millisecondsToDuration = (timeInMs: string) => {
	const timeInSec = Number(timeInMs) / 1000;
	// const hours = Math.floor(timeInSec / 3600);
	const minutes = Math.floor(timeInSec / 60);
	const seconds = timeInSec - minutes * 60;

	function padTime(string: number) {
		return (new Array(2 + 1).join("0") + string).slice(-2);
	}

	const result = `${padTime(minutes)}:${padTime(seconds)}`;
	return result;
};

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

/************************************************** */
/**
 * Generics
 */

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 2], [5]);
const strArray = concatArray<string[]>(['a', 'b'], ['c']);
console.log(numArray);
console.log(strArray);
const dataConcat = concatArray<any[]>(numArray, strArray);
console.log(dataConcat);

/************************************************** */

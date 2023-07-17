"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2], [5]);
const strArray = concatArray(['a', 'b'], ['c']);
console.log(numArray);
console.log(strArray);
const dataConcat = concatArray(numArray, strArray);
console.log(dataConcat);

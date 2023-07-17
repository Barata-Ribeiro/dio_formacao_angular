"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataArray2 = exports.dataArray = exports.product = exports.whateverFunc = exports.height = exports.age = exports.name = void 0;
let isOnline = true;
exports.name = 'Jason';
exports.age = 27;
exports.height = 1.82;
let nullVar = null;
let undefinedVar = undefined;
let anyVar = 123;
function whateverFunc(any) {
    return any;
}
exports.whateverFunc = whateverFunc;
let voidVar;
function QueryExec() { }
exports.product = {
    name: 'Jack',
    city: 'New York',
    age: 40,
};
let myProduct = {
    name: 'Apple',
    price: 3.14,
    unities: 42,
};
exports.dataArray = ['a', 'b', 'c', 'd'];
exports.dataArray2 = ['Jack', 'Jill', 'John'];
let infos = [1, 2, '3', '4'];
let billPayment = ['Water Bill', 199.9, 23847298347];
console.log(exports.dataArray.map((item) => item.toUpperCase()));
console.log(exports.dataArray.filter((item) => item.length >= 0));
console.log(exports.dataArray.pop());
let birthday = new Date('2023-10-04 05:00');
console.log(birthday.toString());
console.log(birthday.toDateString());

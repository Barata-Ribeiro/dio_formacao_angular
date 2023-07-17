/************************************************** */
/**
 * Variables
 */

// boolean, number, string
let isOnline: boolean = true;
// let isOnline = true
export let name: string = 'Jason';
export let age: number = 27;
export let height: number = 1.82;

// special types: null, undefined
let nullVar: null = null;
let undefinedVar: undefined = undefined;

// broad types: any, void
let anyVar: any = 123; // can be string, number, boolean, etc...
export function whateverFunc(any: any): any {
  return any;
}

let voidVar: void;
function QueryExec(): void {}

/************************************************** */
/**
 * Objects
 */

// without predictability
export let product: object = {
  name: 'Jack',
  city: 'New York',
  age: 40,
};

// typed object - with predictability
type StoreProduct = {
  name: string;
  price: number;
  unities: number;
};

let myProduct: StoreProduct = {
  name: 'Apple',
  price: 3.14,
  unities: 42,
};

/************************************************** */
/**
 * Arrays
 */

export let dataArray: string[] = ['a', 'b', 'c', 'd'];
export let dataArray2: Array<string> = ['Jack', 'Jill', 'John'];

// "multitype" array
let infos: (string | number)[] = [1, 2, '3', '4'];

/************************************************** */
/**
 * Tuples
 */

let billPayment: [string, number, number] = ['Water Bill', 199.9, 23847298347];

/************************************************** */
/**
 * Arrays Methods
 */

console.log(dataArray.map((item) => item.toUpperCase()));
console.log(dataArray.filter((item) => item.length >= 0));
console.log(dataArray.pop());

/************************************************** */
/**
 * Dates
 */

let birthday: Date = new Date('2023-10-04 05:00');
console.log(birthday.toString());
console.log(birthday.toDateString());

/************************************************** */

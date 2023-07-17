/************************************************** */
/**
 * Functions
 */

export function addNumber(x: number, y: number): number {
  return x + y;
}

function addToHello(name: string): string {
  return `Hello, ${name}.`;
}

export let sum: number = addNumber(4, 7);
console.log(sum);

console.log(addToHello('John'));

/************************************************** */
/**
 * Multitype Functions
 */

function CallToPhone(phone: number | string): number | string {
  return phone;
}

console.log(CallToPhone(2458674956));

/************************************************** */
/**
 * Async Functions
 */

async function getDatabase(id: number): Promise<number | string> {
  return 234892347918787;
}

/************************************************** */

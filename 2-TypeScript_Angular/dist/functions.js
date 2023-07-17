"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.addNumber = void 0;
function addNumber(x, y) {
    return x + y;
}
exports.addNumber = addNumber;
function addToHello(name) {
    return `Hello, ${name}.`;
}
exports.sum = addNumber(4, 7);
console.log(exports.sum);
console.log(addToHello('John'));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(2458674956));
async function getDatabase(id) {
    return 234892347918787;
}

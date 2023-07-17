"use strict";
const bot1 = {
    id: 1,
    name: 'IX-254',
};
const bot2 = {
    id: '2',
    name: 'TY-875',
    sayHello: function () {
        return 'Hello, there!';
    },
};
console.log(bot1);
console.log(bot2);
class CreateBot {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, I am ${this.name}.`;
    }
}
const p = new CreateBot(1, 'JR-487');
console.log(p.sayHello());

/************************************************** */
/**
 * Interfaces
 */

// type
type robot = {
  id: number;
  name: string;
};

const bot1: robot = {
  id: 1,
  name: 'IX-254',
};

// interface
interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot2: robot2 = {
  id: '2',
  name: 'TY-875',
  sayHello: function (): string {
    return 'Hello, there!';
  },
};

console.log(bot1);
console.log(bot2);

/************************************************** */
/**
 * When to use interfaces
 */

class CreateBot implements robot2 {
  id: number | string;
  name: string;

  constructor(id: number | string, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello, I am ${this.name}.`;
  }
}

const p = new CreateBot(1, 'JR-487');
console.log(p.sayHello());

/************************************************** */

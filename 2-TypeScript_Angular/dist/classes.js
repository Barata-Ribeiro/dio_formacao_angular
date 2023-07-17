"use strict";
class Character {
    name;
    strength;
    skill;
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} attacks with ${this.strength} points!`);
    }
    defend() {
        console.log(`${this.name} defends with ${this.skill} points!`);
    }
}
const p1 = new Character('Jack', 100, 10);
console.log(p1);
p1.attack();
class Warlock extends Character {
    magicPower;
    constructor(name, strength, skill, magicPower) {
        super(name, strength, skill);
        this.magicPower = magicPower;
    }
}
const p2 = new Warlock('Grayson', 20, 10, 100);
console.log(p2);

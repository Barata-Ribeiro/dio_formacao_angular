/************************************************** */
/**
 * Classes and Data Modifiers
 */

// public
// private
// protected

class Character {
  protected readonly name: string;
  private readonly strength: number;
  protected readonly skill?: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`${this.name} attacks with ${this.strength} points!`);
  }

  protected defend(): void {
    console.log(`${this.name} defends with ${this.skill} points!`);
  }
}

const p1 = new Character('Jack', 100, 10);
console.log(p1);
p1.attack();

/************************************************** */
/**
 * Subclasses
 */

// Character: superclass
// Warlock: subclass
class Warlock extends Character {
  magicPower: number;

  constructor(
    name: string,
    strength: number,
    skill: number,
    magicPower: number
  ) {
    super(name, strength, skill);
    this.magicPower = magicPower;
  }
}

const p2 = new Warlock('Grayson', 20, 10, 100);
console.log(p2);

/************************************************** */

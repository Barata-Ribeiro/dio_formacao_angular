/************************************************** */
/**
 * Decorators
 */

// function ShowName(target: any) {
//   console.log(target);
// }

// @ShowName
// class Employee {}

// @ShowName
// class Quincas {}

// class decorator
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: 'Helen' });
  };
}

// attribute decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => '[play]' + _value;
    const setter = (value: string) => {
      if (value.length >= length)
        throw new Error('Length must be at least' + length);
      else _value = value;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Api {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api('Products');

console.log(api.name);

/************************************************** */

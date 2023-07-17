type Hero = {
  name: string;
  alias: string;
};

function printObject(person: Hero) {
  console.log(person);
}

console.log('Hello, World!');

printObject({
  name: 'Steve Rogers',
  alias: 'Captain America',
});

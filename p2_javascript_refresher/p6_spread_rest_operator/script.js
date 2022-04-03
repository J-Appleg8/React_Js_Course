////////////////////////////////////////////////////////////
//// Spread & Rest Operators
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

// [1, 2, 3, 4]
console.log(newNumbers);

//////////////////////////////
const person = {
  name: 'James',
};

const newPerson = {
  ...person,
  age: 25,
};

console.log(newPerson);

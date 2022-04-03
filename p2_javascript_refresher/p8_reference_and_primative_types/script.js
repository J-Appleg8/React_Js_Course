////////////////////////////////////////////////////////////
//// Reference & Primative Types

const person = {
  name: 'James',
};

const secondPerson = person;

// Will keep the name variable unchanged
const thirdPerson = {
  ...person,
};

person.name = 'John';

// Will make the name 'John' for both objects
console.log(secondPerson);
// Will keep the name variable as 'James'
console.log(thirdPerson);

//primitive type variables are permanently stored in stck and if assigned a same value to the reference then new value is created in stack
const name = 'hari';
const age = 21;

const person = {
  name: 'vital',
  age: 21,
};

let newName = name;
newName = 'john';

//if we create a referenc variable refering to a non primitive variable and change the value, then then the value of non primitive is changed since both of the are refering to same memory in heap
//non primitive variables are refernce type variables
let newPerson = person;
newPerson.name = 'dave';

console.log(name, newName);
console.log(person.name);

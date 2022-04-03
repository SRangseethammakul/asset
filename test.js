const arrInit = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr = [];
for (const iterator of arrInit) {
  const person = new Object();
  person.name = `name ${iterator}`;
  person.lastname = `name ${iterator}`;
  arr.push(person);
}
console.log(arr);

/*
class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

const person = new Person("testFirstName", "testLastName");

console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName

*/

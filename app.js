const buildPerson =  require("./people");

const person1 = buildPerson();
person1.fullName("Aj", "Herrera");
person1.hobbies("mangiare", "dormire", "giocare");
console.log(person1);

const person2 = buildPerson();
person2.fullName("", "Rossi");
person2.hobbies("leggere", "", "camminare");
console.log(person2);

const persona3 = buildPerson();
const argsName = [process.argv[2], process.argv[3]];
const [ , , , , ...argsHobbies] = process.argv;
persona3.fullName(...argsName);
persona3.hobbies(...argsHobbies);
console.log(persona3);
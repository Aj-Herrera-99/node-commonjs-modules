const buildPerson =  require("./people");

const person1 = buildPerson();
person1.fullName("Aj", "Herrera");
person1.hobbies("mangiare", "dormire", "giocare");
console.table(person1);
console.log("person1.fullName:", person1.fullName);
console.log("person1.hobbies", person1.hobbies + "\n");

const person2 = buildPerson();
person2.fullName("", "Rossi");
person2.hobbies("leggere", "", "camminare");
console.table(person2);
console.log("person2.fullName:", person2.fullName);
console.log("person2.hobbies", person2.hobbies + "\n");

const person3 = buildPerson();
const argsName = [process.argv[2], process.argv[3]];
const [ , , , , ...argsHobbies] = process.argv;
person3.fullName(...argsName);
person3.hobbies(...argsHobbies);
console.table(person3);
console.log("person3.fullName:", person3.fullName);
console.log("person3.hobbies:", person3.hobbies + "\n");
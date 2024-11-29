const buildPerson =  require("./people");

const person1 = buildPerson();
person1.fullName("Aj", "Herrera");
person1.hobbies("mangiare", "dormire", "giocare");
console.log(person1);

const person2 = buildPerson();
person2.fullName("Mario", "Rossi");
person2.hobbies("leggere", "scrivere", "camminare");
console.log(person2);
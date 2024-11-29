const buildName = require("./names");
const buildHobbies = require("./hobbies");

function buildPerson(){
    return ({
        fullName: function(fname, lname){
            const nameObj = buildName(fname, lname);
            this.fullName = `${nameObj.firstName} ${nameObj.lastName}`;
        },
        hobbies: function(hob1, hob2, hob3){
            const hobbiesObj = buildHobbies(hob1, hob2, hob3);
            this.hobbies = hobbiesObj.hobbies;
        }
    })
}

const person1 = buildPerson();
person1.fullName("Aj", "Herrera");
person1.hobbies("mangiare", "dormire", "giocare");
console.log(person1);

module.exports = buildPerson;
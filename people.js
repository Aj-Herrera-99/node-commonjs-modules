const buildName = require("./names");
const buildHobbies = require("./hobbies");

function buildPerson() {
    const argsHobbies = process.argv[4];
    const tempFullName = buildName(process.argv[2], process.argv[3]);
    let tempHobbies;
    if (argsHobbies) {
        tempHobbies = argsHobbies.split(" ");
        tempHobbies = buildHobbies(...tempHobbies).hobbies;
    } else {
        tempHobbies = buildHobbies().hobbies;
    }
    return {
        fullName: tempFullName.firstName + " " + tempFullName.lastName,
        hobbies: tempHobbies,
    };
}

module.exports = buildPerson;

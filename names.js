function buildName(firstName, lastName) {
    return {
        firstName: firstName || "firstname",
        lastName: lastName || "lastname",
    };
}

module.exports =  buildName;


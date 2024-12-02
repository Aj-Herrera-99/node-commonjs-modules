function buildName(firstName, lastName) {
    return {
        firstName: firstName || "John",
        lastName: lastName || "Doe",
    };
}

module.exports =  buildName;


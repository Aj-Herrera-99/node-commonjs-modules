function buildHobbies(hobbyOne, hobbyTwo, hobbyThree){
    return ({
        hobbies: [hobbyOne || "hobby one", hobbyTwo || "hobby two", hobbyThree || "hobby three"]
    })
}

module.exports = buildHobbies;

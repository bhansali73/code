function truthCheck(collection, pre) {
    console.log(pre.length, pre);
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });

    //Short answer
    //return collection.every(el=>el[pre])
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot") //should return false.

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "name") //should return true.

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "role") //should return false.

truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }], "number") //should return true.

truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "caught") //should return false.

truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "number") //should return false.

truthCheck([{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }], "username") //should return false.

truthCheck([{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users") //should return true.

truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "data") //should return true.

truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "id") //should return false.
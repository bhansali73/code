function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);

    let newArray = collection.filter(obj => {
        console.log(obj);
        return sourceKeys.every(key => {
            console.log(key);
            console.log(obj.hasOwnProperty(key) && obj[key] == source[key]);
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
    })

    return newArray;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
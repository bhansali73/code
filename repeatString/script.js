function repeatStringNumTimes(str, num) {
    let concatString = ""

    if (num > 0) {
        for (let i = 0; i < num; i++) {
            concatString += str;
            console.log(concatString)
        }
    } else {
        str = ""
    }
    str = concatString;
    return str;
}

repeatStringNumTimes("abc", 3);
function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        console.log(str.charCodeAt(i), str.charCodeAt(i - 1), str.charCodeAt(i) - str.charCodeAt(i - 1), String.fromCharCode(str.charCodeAt(i - 1) + 1))
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}

// test here
fearNotLetter("abce")
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
fearNotLetter("bcdf")
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
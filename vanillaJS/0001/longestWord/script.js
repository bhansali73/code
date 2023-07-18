function findLongestWordLength(str) {
    const words = str.split(" ");
    let max = 0;
    let word = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max) {
            max = words[i].length;
            word = words[i];
        }
    }

    console.log(max, `The longest word in  string "${str}" is "${word}" which has ${max} characters`)
    return max;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")


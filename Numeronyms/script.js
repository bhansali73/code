const input = 'Every developer likes to mix kubnernetes and javascript'

function createNumeronym(word) {
    if (word.length < 4) {
        return word
    }
    const numeronym = word[0] + (word.length - 2) + word[word.length - 1];
    return numeronym;
}

function maskSentence(str) {
    const words = str.split(" ");
    const numeronyms = words.map(w => createNumeronym(w));
    return numeronyms.join(" ");
}

console.log(maskSentence(input));
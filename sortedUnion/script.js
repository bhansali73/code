function uniteUnique(arr) {
    let resultArray = [];

    // const args = [...arguments]; we can also do this
    // agruments is an object. We can use when we do not know number of arguments to be passed to a function
    for (let i = 0; i < arguments.length; i++) {
        const arrayArguments = arguments[i];
        //console.log(arrayArguments);

        for (let j = 0; j < arrayArguments.length; j++) {
            if (resultArray.indexOf(arrayArguments[j]) < 0) {
                resultArray.push(arrayArguments[j]);
            } else {
                console.log(`Omit duplicate ${arrayArguments[j]}`)
            }
        }
    }
    console.log(resultArray);
    return resultArray;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].

uniteUnique([1, 3, 2], [5, 4], [5, 6]) //should return [1, 3, 2, 5, 4, 6].

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4]

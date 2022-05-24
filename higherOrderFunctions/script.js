const squareList = arr => {
    // Only change code below this line
    let newArray = arr.filter(x => {
        if (x > 0 && x % 1 === 0) {
            return x;
        }
    }).map(x => {
        return x *= x;
    })
    return newArray;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
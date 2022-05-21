function steamrollArray(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            console.log(true)
            newArray.push(...steamrollArray(arr[i]));
        } else {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
    return newArray;
}
// [1,
//     [2],
//     [3, 
//         [
//             [4]
//         ]
//     ]
// ]
steamrollArray([1, [2], [3, [[4]]]]);
function bouncer(arr) {
    let removedArray = [];
    let updateArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || Number.isNaN(arr[i])) {
            removedArray.push(arr[i]);
        } else {
            updateArray.push(arr[i]);
        }
    }
    console.log(`Retained truthy ${updateArray} , Removed falsy ${removedArray}`)
    arr = updateArray;
    return arr;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"])
bouncer([false, null, 0, NaN, undefined, ""])
bouncer([null, NaN, 1, 2, undefined])
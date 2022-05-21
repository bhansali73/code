function myReplace(str, before, after) {
    if (before[0].toUpperCase() === before[0]) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
        console.log(before, typeof after, after, str.replace(before, after));
    } else if (before[0].toUpperCase() !== before[0] && after[0].toUpperCase() === after[0]) {
        after = after.charAt(0).toLowerCase() + after.slice(1);
        console.log(after)
    } else {
        console.log(false)
        console.log(str.replace(before, after));
    }
    return str.replace(before, after);

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");
myReplace("Let us go to the store", "store", "mall")

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

myReplace("I think we should look up there", "up", "Down")

myReplace("This has a spellngi error", "spellngi", "spelling")

myReplace("His name is Tom", "Tom", "john")

myReplace("Let us get back to more Coding", "Coding", "algorithms") 
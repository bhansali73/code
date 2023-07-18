function mutation(arr) {

    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase().split('');

    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) !== -1) {
            return true
        } else {
            return false;
        }
    }

}

mutation(["Alien", "line"])
mutation(["hello", "hey"])
mutation(["hello", "Hello"])
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
mutation(["Mary", "Army"])
mutation(["Mary", "Aarmy"])
mutation(["Alien", "line"])
mutation(["floor", "for"])
mutation(["hello", "neo"])
mutation(["voodoo", "no"])
mutation(["ate", "date"])
mutation(["Tiger", "Zebra"])
mutation(["Noel", "Ole"])
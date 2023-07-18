function pairElement(str) {
    let newArray = str.split('');
    console.log(newArray);
    let resultArray = [];
    for (let i = 0; i < newArray.length; i++) {
        switch (newArray[i]) {
            case 'G':
                resultArray.push(['G', 'C'])
                break;
            case 'C':
                resultArray.push(['C', 'G'])
                break;
            case 'A':
                resultArray.push(['A', 'T'])
                break;
            case 'T':
                resultArray.push(['T', 'A'])
                break;
            default:
                console.log('Invalid')
        }
    }
    console.log(resultArray)
    return resultArray;
}

pairElement("GCG");
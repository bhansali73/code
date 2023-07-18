//Write three pure functions as follows
//mean(values = []) - takes in values array and returns a number which is the mean (average) of the values
//median(values = []) - takes in the values and returns the median value of the sample. Median is valculated with the following formula
//average (values, method) - Takes in 2 parameters - values array and method callback, returns single value based on the method.

function mean(values) {
    const sum = values.reduce((a, b) => a + b)
    return sum / values.length;
}

function median(values) {
    if (values.length % 2 !== 0) {
        return values[parseInt((values.length) / 2)]
    }

    const term1 = values[(values.length / 2) - 1]
    const term2 = values[(values.length / 2 + 1) - 1]

    return (term1 + term2) / 2;
}

function average(values, method) {
    return method(values)
}

average([1, 2, 5, 8, 12], mean)
average([1, 2, 5, 8, 12], median)

console.log(average([1, 2, 5, 8, 12], mean),
    average([1, 2, 5, 8, 12], median));


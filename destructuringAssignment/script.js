const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({ max, min }) => {
    return (max + min) / 2;
}

  // Only change code above this line

// stats should be an object.

// half(stats) should be 28.015

// Destructuring should be used.

// Destructured parameter should be used.
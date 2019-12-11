const fs = require('fs');

const filename = 'day1/input.txt';

const getResult = () => {
    // Get Input
    const inputArray = fs.readFileSync(filename).toString().split("\n").map(x => parseInt(x));
    // Reduce
    let solution = inputArray.reduce(requiredFuel,0);
    // Display Result
    console.log(solution);
};

const calculateFuelZero = (mass) => {
    if (mass <= 2) return 0;
    let current = calculateFuel(mass);
    return current + calculateFuelZero(current);
};

const calculateFuel = (mass) => {
    let divByThree = Math.floor(mass / 3);
    if (divByThree <= 2) return 0;
    return divByThree - 2;
};

const requiredFuel = (allFuel, item) => {
    return allFuel + calculateFuelZero(item);
};

// 5213146
getResult();
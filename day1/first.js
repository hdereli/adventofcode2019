const fs = require('fs');

const filename = 'day1/input.txt';

function getResult(){
    // Get Input
    const inputArray = fs.readFileSync(filename).toString().split("\n");
    // Reduce
    let sumOfAll = inputArray.reduce(requiredFuel,0);
    // Display Result
    console.log(sumOfAll);
}

function requiredFuel(allFuel, item, index) {
    return allFuel + Math.floor( parseInt(item) / 3 ) - 2;
}

// 3477353
getResult();
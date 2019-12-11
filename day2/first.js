const fs = require('fs');

const filename = 'day2/input.txt';

const Operations = {
    ADD: 1,
    MULTIPLY: 2,
    STOP: 99
};

const getResult = () => {
    // Get Input
    const intArray = fs.readFileSync(filename).toString().split(",").map(x=>parseInt(x));
    
    // Initial Values
    let i = 0;
    intArray[1] = 12;
    intArray[2] = 2;
    
    // Loop
    do{
        let x = intArray[intArray[i + 1]];
        let y = intArray[intArray[i + 2]];
        // Add
        if (intArray[i] === Operations.ADD) {
            intArray[intArray[i + 3]] = x + y;
        } else if (intArray[i] === Operations.MULTIPLY) {
            intArray[intArray[i + 3]] = x * y;
        } 
        i = i + 4;
    }
    while (intArray[i] !== Operations.STOP);

    // Display Result
    console.log(intArray[0]);
};

// Run
getResult();
// -------> 2842648

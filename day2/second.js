const fs = require('fs');

const filename = 'day2/input.txt';

const Operations = {
    ADD: 1,
    MULTIPLY: 2,
    STOP: 99
};

const EXPECTED_RESULT = 19690720;

const getResult = () => {
    
    [...Array(100).keys()].forEach((verb) => {    
        [...Array(100).keys()].forEach((noun) => {
            if(findVerbAndNoun(verb,noun) === EXPECTED_RESULT){
                console.log(`Verb ${verb}, noun ${noun} and the result ${(100 * verb + noun)}` );
            }
        });
    });

};

const findVerbAndNoun = (noun, verb) => {
    // Get Input
    const intArray = fs.readFileSync(filename).toString().split(",").map(x => parseInt(x));

    // Initial Values
    let i = 0;
    intArray[1] = noun;
    intArray[2] = verb;

    // Loop
    do {
        let x = intArray[intArray[i + 1]];
        let y = intArray[intArray[i + 2]];
        // Add
        if (intArray[i] === Operations.ADD) {
            intArray[intArray[i + 3]] = x + y;
        } else if (intArray[i] === Operations.MULTIPLY) {
            intArray[intArray[i + 3]] = x * y;
        }
        i += 4;
    }
    while (intArray[i] !== Operations.STOP);

    return intArray[0];
};

// Run
getResult();
// -> 9074
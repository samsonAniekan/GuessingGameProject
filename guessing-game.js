const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// the readline method displays ansnwers on the standard output, it takes the askGuess function as callback
//rl.question("Enter a guess: ", askGuess)


function checkGuess(number) {
    if (number > secretNumber) {
        console.log("Too high");
        return false;
    }

    else if (number < secretNumber) {
        console.log("Too low");
        return false;
    }

    else if (number === secretNumber) {
        console.log("Correct!");
        return true;
    }
}
 let numberOFAttempts = 5;

let secretNumber = randomInRange(0, 100)
function askGuess(firstAnswer) {
    // if (typeof firstAnswer !== 'number') {
    //     return false;
    // }
    numberOFAttempts--
    if(checkGuess(Number(firstAnswer))) {
        console.log("you win");
        rl.close()
    }

    if (numberOFAttempts === 0) {
        console.log("you LOSE");
         return rl.close();
    }

    rl.question("Enter another guess ", askGuess);

}

function randomInRange(min, max) {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

/** when askRaneg is called it runs the block of code and the calls the ask guess function for next steps **/
function askRange() {
    rl.question("Enter a Min Number: ", (min) => {
        rl.question("Enter a Max Number: ", (max) => {
            console.log(`I am thinking of a number between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min), Number(max));
            rl.question("enter a guess ", askGuess);
        })
    })
}
/**the whole game starts here at the askLimit function and the calls ask Range function */
function askLimit() {
    rl.question("Please enter Game Attempts: ", (limit) => {
        numberOFAttempts = Number(limit);
        askRange();
    })
}
 askLimit();

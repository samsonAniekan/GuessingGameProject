const secretNumber = 4;

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

// console.log(checkGuess(10));
// console.log(checkGuess(3));
// console.log(checkGuess(-1));
// console.log(checkGuess(5));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a guess: ", askGuess)
function askGuess(firstAnswer) {
    if(checkGuess(Number(firstAnswer)) === true) {
        console.log("you win");
        rl.close()
    }
       else if (Number(firstAnswer) > secretNumber) {
         console.log("try again");
         rl.question("Enter another guess: ", askGuess);
     }

    else {
        console.log("you lose!");
        rl.close();
    }
}

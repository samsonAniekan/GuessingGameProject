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


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// the readline method displays ansnwers on the standard output, it takes the askGuess function as callback
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

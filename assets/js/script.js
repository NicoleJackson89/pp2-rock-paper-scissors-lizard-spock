// This event listener waits for the DOM to load before running the fuction
// Get the HTML button elements and adds event listeners to each of them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    console.log(buttons);
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let player = this.getAttribute("data-type");
            console.log(player);



            let computer = bot(); // the function is called and assiged to the computer variable
            console.log(computer);

            let results = compareChoices(player, computer); // the function is called and assiged to the results variable, i passed two parameters in the fucntion
            document.getElementById("results").innerText = results; // prints the result to the page in the browser

            firstToFive()
        });
    };
})

/**
 * Bot function creates a random number from 1 to 4 which gets stored in the randomBotChoice variable
 */
function bot() {
    // console.log("The bot made a choice"); // check if it was triggered or not in the console
    let randomBotChoice = Math.floor(Math.random() * 4) + 1;
    // console.log(randomBotChoice); // prints the number of the choice bot made
    if (randomBotChoice === 1) {
        randomBotChoice = "rock";
    } else if (randomBotChoice === 2) {
        randomBotChoice = "paper";
    } else if (randomBotChoice === 3) {
        randomBotChoice = "scissors";
    } else if (randomBotChoice === 4) {
        randomBotChoice = "lizard";
    } else {
        randomBotChoice = "spock";
    }
    return randomBotChoice;
}

/**
 * This fuction compares the bot and user choices to let the user know who won the round
 * @param {the local variable which displays the choice made by the user} userChoice 
 * @param {the local variable which displays the choice made by the bot} botChoice 
 * @returns The string which is relevant to the choises bot/user made and displays this
 */
function compareChoices (userChoice, botChoice) { //local variable passed as parameter, can have any names (in the function definition)
    // Tie game
    if (userChoice === botChoice) {
        return `You chose ${userChoice}, the bot chose ${botChoice} - Its a tie!`;
    }
    // If the user chose rock
    else if (userChoice === "rock") {
        if (botChoice === "scissors") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock breaks scissors, you win!`;
        } else if (botChoice === "paper") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper covers rock, you lose!`;
        } else if (botChoice === "lizard") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock crushes lizard, you win!`;
        } else {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock vaporizes rock, you lose!`;
        }
    }
    // If the user chose paper
    else if (userChoice === "paper") {
        if (botChoice === "scissors") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors cut paper, you lose!`;
        } else if (botChoice === "rock") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper covers rock, you win!`;
        } else if (botChoice === "lizard") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard eats paper, you lose!`;
        } else {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper disproves Spock, you win!`;
        }
    }
    // If the user chose scissors
    else if (userChoice === "scissors") {
        if (botChoice === "paper") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors cut paper, you win!`;
        } else if (botChoice === "rock") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock breaks scissors, you lose!`;
        } else if (botChoice === "lizard") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors decapitate lizard, you win!`;
        } else {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock smashes scissors, you lose!`;
        }
    }
    // If the user chose lizard
    else if (userChoice === "lizard") {
        if (botChoice === "scissors") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors decapitate lizard, you lose!`;
        } else if (botChoice === "rock") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock crushes lizard, you lose!`;
        } else if (botChoice === "paper") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard eats paper, you win!`;
        } else {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard poisons Spock, you win!`;
        }
    }
    // If the user chose spock
    else if (userChoice === "spock") {
        if (botChoice === "scissors") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock smashes scissors, you win!`;
        } else if (botChoice === "rock") {
            userScoreIncrement();
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock vaporizes rock, you win!`;
        } else if (botChoice === "lizard") {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard poisons Spock, you lose!`;
        } else {
            botScoreIncrement()
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper disproves Spock, you lose!`;
        }
    }
}

/**
 * This function increments the current user score from the DOM by 1 for each win
 */
function userScoreIncrement() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++userScore;
}

/**
 * This function increments the current bot score from the DOM by 1 for each win
 */
function botScoreIncrement() {
    let botScore = parseInt(document.getElementById("bot-score").innerText);
    document.getElementById("bot-score").innerText = ++botScore;
}

/**
 * This function checks both bot & user score, once one has reached a score of 5 a winner in announced and the scores reset to 0 
 */
function firstToFive() {
    let botTotal = parseInt(document.getElementById("bot-score").innerText);
    let userTotal = parseInt(document.getElementById("user-score").innerText);

    if (botTotal === 5) {
        document.getElementById("results").innerText = "First to score 5 wins, Bot won this round try again!";
        document.getElementById("bot-score").innerText = 0;
        document.getElementById("user-score").innerText = 0;
    } else if (userTotal === 5) {
        document.getElementById("results").innerText = "First to score 5 wins, You won this round play again!";
        document.getElementById("bot-score").innerText = 0;
        document.getElementById("user-score").innerText = 0;
    }
}

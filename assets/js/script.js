// This event listener waits for the DOM to load before running the fuction
// Get the HTML button elements and adds event listeners to each of them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function user() {
            let userChoice = this.getAttribute("data-type");
            // alert(`You chose ${userChoice}`);
            bot();
            console.log(userChoice);
            console.log(bot());
        });
    };
})

/**
 * Bot function creates a random number from 1 to 4 which gets assigned to botChoice
 */
function bot() {
    let botChoice = Math.floor(Math.random() * 4) + 1;

    if (botChoice === 1) {
        botChoice = "rock";
    } else if (botChoice === 2) {
        botChoice = "paper";
    } else if (botChoice === 3) {
        botChoice = "scissors";
    } else if (botChoice === 4) {
        botChoice = "lizard";
    } else {
        botChoice = "spock";
    }
    return botChoice;
}

/**
 * This fuction compares the bot and user choices to check who won the round
 */
function compareChoices () {
    // Tie game
    if (userChoice === botChoice) {
        return `You chose ${userChoice}, the bot chose ${botChoice} - Its a tie!`;
    }
    // If the user chose rock
    else if (userChoice === "rock") {
        if (botChoice === "scissors") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock breaks scissors, you win!`;
        } else if (botChoice === "paper") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper covers rock, you lose!`;
        } else if (botChoice === "lizard") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock crushes lizard, you win!`;
        } else {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock vaporizes rock, you lose!`;
        }
    }
    // If the user chose paper
    else if (userChoice === "paper") {
        if (botChoice === "scissors") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors cut paper, you lose!`;
        } else if (botChoice === "rock") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper covers rock, you win!`;
        } else if (botChoice === "lizard") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard eats paper, you lose!`;
        } else {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper disproves Spock, you win!`;
        }
    }
    // If the user chose scissors
    else if (userChoice === "scissors") {
        if (botChoice === "paper") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors cut paper, you win!`;
        } else if (botChoice === "rock") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock breaks scissors, you lose!`;
        } else if (botChoice === "lizard") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors decapitate lizard, you win!`;
        } else {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock smashes scissors, you lose!`;
        }
    }
    // If the user chose lizard
    else if (userChoice === "lizard") {
        if (botChoice === "scissors") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Scissors decapitate lizard, you lose!`;
        } else if (botChoice === "rock") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Rock crushes lizard, you lose!`;
        } else if (botChoice === "paper") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard eats paper, you win!`;
        } else {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard poisons Spock, you win!`;
        }
    }
    // If the user chose spock
    else if (userChoice === "spock") {
        if (botChoice === "scissors") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock smashes scissors, you win!`;
        } else if (botChoice === "rock") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Spock vaporizes rock, you win!`;
        } else if (botChoice === "lizard") {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Lizard poisons Spock, you lose!`;
        } else {
            return `You chose ${userChoice}, the bot chose ${botChoice} - Paper disproves Spock, you lose!`;
        }
    }
}


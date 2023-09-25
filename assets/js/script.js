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


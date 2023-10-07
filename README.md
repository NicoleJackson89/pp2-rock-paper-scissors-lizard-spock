# Rock, Paper, Scissors, Lizard, Spock

### [View the live page here](https://nicolejackson89.github.io/pp2-rock-paper-scissors-lizard-spock/)

This web based strategy game, Rock Paper Scissors Lizard Spock, was made to target anyone who has minimal time available but enjoys a quick strategy game that can be played on any device against the computer/bot.

"Rock Paper Scissors Spock Lizard" was invented by Sam Kass and Karen Bryla, as "Rock Paper Scissors Spock Lizard". The expansion version works on the same principle as the original "Rock Paper Scissor" most of us played as kids but with the two additional weapons.

![Responsive](./assets/docs/am-i-responsive.png)

## User Experience

### Strategy

Rock, Paper, Scissors, Lizard, Spock was made as a web based game for users who are familiar with The Big Bang Theory series where this expansion version of Rock, Paper, Scissors was aired in a few episodes.

- Target users are of any age, who may not have much time available, enjoy short periods of easy accessible and responsive web based games from any device.
- A second player is not needed as this game has a Bot as the opponent.
- A Rules page has been added for new users or users needing a refresher on game rules.
- The game ends once a score of 5 is reached by the User/Bot.
- A Reset button is been provided If the user would like to restart the game at any point.
- Score is shown for progress of the game for the User and the Bot.
- There is a section showing the Bot and User choices of the game that has just been played.

### Scope

Content features are as follows:

- Rules section for all users where needed
- Reset option to restart the game and all controls, results and scores
- Game controls area where the user can easily interact with choices available
- Choices area showing the users chosen move as well as the choice of the bot for each round
- Results section below this returning the choices made and the round winner
- Score section for both the user and bot scores.

### Structure



### Wireframe

### Color Palette

### Color Contrast

### Fonts

## Features

### Existing Features

### Future Features

## Testing

- The HTML, CSS & JavaScript code was tested using the W3C validator to fix any errors or warnings as well as JSHint.

### HTML Validator

- The HTML page was passed through the official [W3C HTML validator](https://validator.w3.org/) no errors were found.
- [Info messages](./assets/docs/html-validator-before.png) were shown for trailing slashes being used on end tags where they were not nessesary, the slashes were removed.

![HTML Validator](./assets/docs/html-validator-after.png)

### CSS Validator

- No errors were found when validating my CSS code through the official [W3C CSS validator](https://jigsaw.w3.org/css-validator/).

![CSS Validator](./assets/docs/css-validator.png)

### JavaScript Validator

#### Testing - Before fixes

- No errors were found when validating my JavaScript code through [JSHint](https://jshint.com/).
- 59 Warnings were found, sonme of these were fixed with adding the correct version to the test before plaving the JavaScript code.
- Other fixes were relating to the userImgChange & botImgChange functions. The return statement was moved to beloww#each "else if" condition.

![JSHint](./assets/docs/javascript-validator-before.png)

#### Testing - After fixes
- 1 Warning was found in my event listener due to the loop, I made a concise decision to leave this as is as this runs the main function for the game.

![JSHint](./assets/docs/javascript-validator-after.png)

### Lighthouse

I used the Lighthouse Google Chrome dev tools feature to test the website in mobile and desktop view.

- Desktop

  - The performance score was good on desktop testing.

![Lighthouse Desktop](./assets/docs/lighthouse-desktop.png)

- Mobile

  - A lower performance score was received on the mobile testing.

![Lighthouse Mobile](./assets/docs/lighthouse-mobile.png)

### Manual Testing

|What was tested|Result|
|---|---|
|Rules button: Opens ontop of the page content when clicked|Passed|
|Close button in rules: Closes when clicked|Passed|
|Reset button: Reloads the page and all buttons|Passed|
|User/bot - selection & scores: When a user/bot takes his/her turn that the images show in teh choice placeholder and scores increment correctly|Passed|

### Known bugs and fixes

|What was tested / Expected results|Actual Results|What was done to fix the bug|
|---|---|---|
|Rules button - The rules popup section was meant to display|The popup becane visible but "Undefined" was also returned in the results section when clicked due to the main game function and loop|The buttons wehe replaced with div's to correct this|
|"Rules, Close & Reset" buttons - Mouse pointer when hovered over|Text insertion I beam curser|The pointer curser was specified in CSS to fix this|
|Game rules popup active - The game in the background would be inactive / not clickable|User selection / controls were still active and clickable|An overlay was placed around the rules section, visibility was changed to display in CSS for styling|

## Deployment

### [GitHub](https://github.com/) deployment

As this code is stored in GitHub, I deployed this webpage as follows:

1. Login to GitHub
2. Click the repository you wish to deploy (Top left corner)
3. In the navigation bar at the top, click 'Settings'
4. In the menu on the left-hand side, click 'Pages'
5. Under 'Source' select the drop down menu and click 'Deploy from a branch'
6. Under 'Branch' select the first drop down menu and click 'main' and save
7. The page will be given a URL as shown in the image below next to 'Your site is live at', this may take a few minutes to process before becoming visible.

![GitHub Deployment](./assets/docs/deployment.png)

### Cloning the GitHub repository

Cloning a repository will download a full copy of the data to your computer. This is useful when larger commits need to be pushed, adding or removing files and fixing merge conflicts.

1. Login to GitHub
2. Click the repository you wish to clone (Top left corner)
3. Click 'Code' which is shown above the list of files in the repository
4. Click the 'Local' tab, copy the HTTPS URL
5. Open Codeanywhere, click 'New Workspace'
6. Paste the copied URL into the space given under 'Repository URL'
7. Click 'Create' and the local clone will be created.

### Forking the GitHub repository

Forking a GitHub repository will allow you to make a copy of the repository, changes can be then be made that will not affect the original repository. This is useful for proposed changes, ideas or fixes to an original repository.

1. Login to GitHub
2. Click the repository you wish to fork (Top left corner)
3. Click the 'Fork' drop down in the top right-hand corner
4. Then click 'Create a new fork' you will now have a copy to work on.

## Technologies Used

## Credits

## Acknowledgements

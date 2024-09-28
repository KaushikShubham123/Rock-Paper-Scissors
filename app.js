const choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#compscore");
let statusMsg = document.querySelector("#status");
let userrun = 0;
let comprun = 0;

let showWinner = (userWin, compChoice) => {
    if (userWin) {

        statusMsg.innerText = `You are the winner because Computer choice is ${compChoice}`;
        userrun++;
        userScore.innerText = userrun;

    }
    else {
        statusMsg.innerText = `You Lost because Computer choice is ${compChoice}`;
        comprun++;
        compScore.innerText = comprun;

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice);


    });

});
const PlayGame = (userChoice) => {

    const compChoice = genCompChoice();


    if (userChoice === compChoice) {

        statusMsg.innerText = `It's a Draw `;

    }

    else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper or scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // scissor or rock
            userWin = compChoice === "scissor" ? false : true;

        }
        else {
            // rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice);

    };


}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
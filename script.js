let numOfRounds = 0;
let computerScore = 0;
let humanScore = 0;
let winner = "";
let humanChoice = "";
let computerChoice = "";
let roundNumber = 0;
let finalHumanScore = 0;
let finalComputerScore = 0;


function getComputerChoice() {
    let compRandomNum = 0;
    let compResult = "";

    compRandomNum = Math.floor(Math.random() * 3) + 1;
    /*console.log("Comp Number: " + compRandomNum);*/

    if (compRandomNum == 1) {
        compResult = "Rock";
    } else if (compRandomNum == 2) {
        compResult = "Paper";
    } else if (compRandomNum == 3) {
        compResult = "Scissors";
    }

    //console.log("getComputerChoice Function compResult var is:" + compResult)

    return compResult;
}

function playRound(humanItem, computerItem) {
    // console.log("Begin determineWinner func.....  \nhumanItem var is: " + humanItem +
    // "\ncomputerItem var is: " + computerItem)
    // humanItem var and computerItem var should match humanChoice and computerChoice


    let winnerIs = ""
    if (computerItem == "Rock") {
        if (humanItem == "Paper") {
            winnerIs = "Human";
            console.log("You win! " + humanItem + " beats " + computerItem);
        } else if (humanItem == "Scissors") {
            winnerIs = "Computer";
            console.log("You lose! " + computerItem + " beats " + humanItem);
        } else {
            winnerIs = "Tie";
            console.log("This round was a tie! No points for either player.")
        }

    } else if (computerItem == "Paper") {
        if (humanItem == "Scissors") {
            winnerIs = "Human";
            console.log("You win! " + humanItem + " beats " + computerItem);
        } else if (humanItem == "Rock") {
            winnerIs = "Computer";
            console.log("You lose! " + computerItem + " beats " + humanItem);
        } else {
            winnerIs = "Tie";
            console.log("This round was a tie! No points for either player.")
        }
    } else if (computerItem == "Scissors") {
        if (humanItem == "Rock") {
            winnerIs = "Human";
            console.log("You win! " + humanItem + " beats " + computerItem);
        } else if (humanItem == "Paper") {
            winnerIs = "Computer";
            console.log("You lose! " + computerItem + " beats " + humanItem);
        } else {
            winnerIs = "Tie";
            console.log("This round was a tie! No points for either player.")
        }
    }

    // console.log("determineWinner loop winnerIs var is: " + winnerIs);
    return winnerIs


}




function createScoreKeepSection() {

    const scoreKeepSectDiv = document.createElement("div");
    scoreKeepSectDiv.classList.add("score-keep-sect");
    document.body.append(scoreKeepSectDiv);

    const scoreHeaderPara = document.createElement("h2");
    scoreHeaderPara.id = "score-header";
    scoreHeaderPara.textContent = "SCORE:";

    const scoreDisplayDiv = document.createElement("div");
    scoreDisplayDiv.classList.add("score-display");

    const humanScoreCardDiv = document.createElement("div");

    const humanScoreHeader = document.createElement("h3");
    humanScoreHeader.classList.add("score-header");
    humanScoreHeader.textContent = "You";


    const humanScorePara = document.createElement("p");
    humanScorePara.classList.add("score");
    humanScorePara.id = "human-score"
    humanScorePara.textContent = humanScore;

    humanScoreCardDiv.appendChild(humanScoreHeader);
    humanScoreCardDiv.appendChild(humanScorePara);


    const computerScoreCardDiv = document.createElement("div");


    const computerScoreHeader = document.createElement("h3");
    computerScoreHeader.classList.add("score-header");
    computerScoreHeader.textContent = "Computer";


    const computerScorePara = document.createElement("p");
    computerScorePara.id = "computer-score"
    computerScorePara.classList.add("score");
    computerScorePara.textContent = computerScore;

    computerScoreCardDiv.appendChild(computerScoreHeader);
    computerScoreCardDiv.appendChild(computerScorePara);



    scoreDisplayDiv.appendChild(humanScoreCardDiv);
    scoreDisplayDiv.appendChild(computerScoreCardDiv);




    scoreKeepSectDiv.appendChild(scoreHeaderPara);
    scoreKeepSectDiv.appendChild(scoreDisplayDiv);





}


function createPlayerChoiceSection() {

    const choiceSectDiv = document.createElement("div");
    choiceSectDiv.classList.add("choice-sect");
    document.body.append(choiceSectDiv);

    const choiceInstrPara = document.createElement("p");
    choiceInstrPara.classList.add("#select-weapon-instruction");
    choiceInstrPara.textContent = "Choose your weapon of choice to match against your computer foe: ";
    choiceSectDiv.appendChild(choiceInstrPara);

    const choiceBoxDiv = document.createElement("div");
    choiceBoxDiv.classList.add("choice-box");
    choiceSectDiv.appendChild(choiceBoxDiv);

    const rockChoiceBtn = document.createElement("button");
    rockChoiceBtn.classList.add("btn-choice");
    rockChoiceBtn.id = "btn-rock";
    rockChoiceBtn.type = "button";
    rockChoiceBtn.textContent = "Rock";

    const paperChoiceBtn = document.createElement("button");
    paperChoiceBtn.classList.add("btn-choice");
    paperChoiceBtn.id = "btn-paper";
    paperChoiceBtn.type = "button";
    paperChoiceBtn.textContent = "Paper";

    const scissorsChoiceBtn = document.createElement("button");
    scissorsChoiceBtn.classList.add("btn-choice");
    scissorsChoiceBtn.id = "btn-scissors";
    scissorsChoiceBtn.type = "button";
    scissorsChoiceBtn.textContent = "Scissors";

    choiceBoxDiv.appendChild(rockChoiceBtn);
    choiceBoxDiv.appendChild(paperChoiceBtn);
    choiceBoxDiv.appendChild(scissorsChoiceBtn);

}


function createPlayPage() {

    createScoreKeepSection();
    createPlayerChoiceSection();
}


function gameEndDisplay(gameWinner) {
    console.log("gameWinner @ gameEndDisplay function: ", gameWinner);
    const playerChoiceSect = document.querySelector(".choice-sect");

    playerChoiceSect.remove();


    const endGameDisplaySect = document.createElement("div");
    document.body.appendChild(endGameDisplaySect);

    const gameOverPara = document.createElement("p");
    gameOverPara.textContent = "Game Over";

    const gameWinnerDisplay = document.createElement("p");
    if (gameWinner == "human") {
        gameWinnerDisplay.textContent = "Congratulations, you won the game!";
    } else if (gameWinner == "computer") {
        gameWinnerDisplay.textContent = "Aaahhhhh, too bad.  The computer beat you.  Go cry to mommy...";
    }


    endGameDisplaySect.appendChild(gameOverPara);
    endGameDisplaySect.appendChild(gameWinnerDisplay);


}


function updateScore(roundWinner) {

    console.log("roundWinner: ", roundWinner);

    const humanScorePara = document.querySelector("#human-score");
    const computerScorePara = document.querySelector("#computer-score");

    if (roundWinner == "Human" | roundWinner == "Computer") {
        if (roundWinner == "Human") {
            humanScore = humanScore + 1;
            humanScorePara.textContent = humanScore;
        } else {
            computerScore = computerScore + 1;
            computerScorePara.textContent = computerScore;
        }
    }
    console.log("humanScore: " + humanScore + "\ncomputerScore is: " + computerScore);

}


function checkForGameWinner(humanScore, computerScore) {

    let gameWonStatus = false;
    let gameWinner = ""

    if (humanScore == 5) {
        gameWonStatus = true;
        gameWinner = "human";
    } else if (computerScore == 5) {
        gameWonStatus = true;
        gameWinner = "computer";
    }


    return { gameWonStatus, gameWinner };
}



const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener('click', () => {

    console.log("start game button clicked");
    startBtn.remove();

    const welcomeDiv = document.querySelector(".welcome");
    const welcomePara = document.querySelector(".welcome p");
    welcomeDiv.removeChild(welcomePara);


    createPlayPage();




    const choiceBtns = document.querySelectorAll(".btn-choice");
    choiceBtns.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.id) {
                case "btn-rock":
                    humanChoice = "Rock";
                    console.log("rock button clicked")
                    break;
                case "btn-paper":
                    humanChoice = "Paper";
                    console.log("paper button clicked")
                    break;
                case "btn-scissors":
                    humanChoice = "Scissors";
                    console.log("scissors button clicked")
                    break;
                default:
                    console.log("error with btn click")
            }


            computerChoice = getComputerChoice();
            roundWinner = playRound(humanChoice, computerChoice);
            updateScore(roundWinner);
            const { gameWonStatus, gameWinner } = checkForGameWinner(humanScore, computerScore);
            console.log("gameWonStatus: ", gameWonStatus);
            console.log("gameWinner: ", gameWinner);
            if (gameWonStatus == true) {
                gameEndDisplay(gameWinner);
            }



        });

    });

});
















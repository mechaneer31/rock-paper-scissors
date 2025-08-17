    let numOfRounds = 0;
    let compScore = 0;
    let humanScore = 0;
    let winner = "";
    let humanChoice =  "";
    let computerChoice = "";
    let roundNumber = 0;
    let finalHumanScore = 0;
    let finalComputerScore = 0;


    function getHumanChoice() {
        let humanResult = prompt("Which item do you choose?");
        let humanResultLowerCase = humanResult.toLowerCase();
        let humanResultSubString = humanResultLowerCase.substring(1);
            console.log(humanResultSubString)
        let humanResultFirstLetter = humanResultLowerCase.slice(0,1);
        let humanResultFirstLetterCap = humanResultFirstLetter.toUpperCase();
            console.log(humanResultFirstLetterCap);
        let finalHumanResult = humanResultFirstLetterCap + humanResultSubString;
        console.log("finalHumanResult is: " + finalHumanResult)
        /*console.log("getHumanchoice Function humanResult var is: " + humanResult);*/
        return finalHumanResult
    }

    function getComputerChoice() {
        let compRandomNum = 0;
        let compResult = "";
        
        compRandomNum = Math.floor(Math.random() * 3) + 1;
                /*console.log("Comp Number: " + compRandomNum);*/

            if (compRandomNum == 1) {
                compResult = "Rock";
            } else if(compRandomNum == 2) {
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
                    winnerIs ="Tie";
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
                } else if (humanItem == "Paper"){
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

    function playGame(numberRounds) {
        
            // numOfRounds = prompt("How many rounds would you like to play?")
            // console.log("Number of rounds chosen: " + numOfRounds);
            console.log("number of rounds: " + numberRounds)
            humanScore = 0;
            compScore = 0;

            for (let i = 1; i <= numberRounds; i++) {
                console.log("***********Round " + i +"**************");
                
            humanChoice = getHumanChoice()
            computerChoice = getComputerChoice()
            roundWinner = playRound(humanChoice, computerChoice);            
            
            if (roundWinner == "Human" | roundWinner == "Computer"){
                                if (roundWinner == "Human") {
                                    humanScore = humanScore + 1;
                                } else {
                                    compScore = compScore +1;
                                }
                            }
                            console.log("humanScore: " + humanScore + "\ncomputerScore is: " + compScore);
            }
            if(humanScore > compScore) {
                winnerOfGame = "Human"
            } else if (compScore > humanScore) {
                winnerOfGame = "Computer"
            } else {
                winnerOfGame = "Tie"
            }
            console.log("winnerOfGame is: " + winnerOfGame);
            return winnerOfGame
            
    }


            gameWinner = playGame(5);
            console.log("gameWinner is: " + gameWinner)
            if (gameWinner == "Human" | gameWinner == "Computer") {
                if (gameWinner == "Human") {
                    console.log("You won the game!");
                } else {
                    console.log("Computer won the game!  You are a complete loser and should jump off a bridge.")
                }      
            } else {
                console.log("The game ended in a tie!")
            }
    







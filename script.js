    let numOfRounds = 0;
    let compScore = 0;
    let humanScore = 0;
    let winner = "";
    let humanChoice =  "";
    let computerChoice = "";
    let roundNumber = 0;


    function getHumanChoice() {
        let humanResult = prompt("Which item do you choose?");
        console.log("getHumanchoice Function humanResult var is: " + humanResult);
        return humanResult
    }

    function getComputerChoice() {
        let compRandomNum = 0;
        let compResult = "";
        
        compRandomNum = Math.floor(Math.random() * 3) + 1;
                console.log("Comp Number: " + compRandomNum);

            if (compRandomNum == 1) {
                compResult = "Rock";
            } else if(compRandomNum == 2) {
                compResult = "Paper";
            } else if (compRandomNum == 3) {
                compResult = "Scissors";
            }

            console.log("getComputerChoice Function compResult var is:" + compResult)

            return compResult;
    }
    
    function determineWinner(humanItem, computerItem) {
        console.log("Begin determineWinner func.....  \nhumanItem var is: " + humanItem +
            "\ncomputerItem var is: " + computerItem)
                /*humanItem var and computerItem var should match humanChoice and computerChoice */
        let winnerIs = ""
        if (computerItem == "Rock") {
                if (humanItem == "Paper") {
                    winnerIs = "Human";
                } else if (humanItem == "Scissors") {
                    winnerIs = "Computer";
                } else {
                    winnerIs ="Tie";
                }

            } else if (computerItem == "Paper") {
                if (humanItem == "Scissors") {
                    winnerIs = "Human";
                } else if (humanItem == "Rock") {
                    winnerIs = "Computer";
                } else {
                    winnerIs = "Tie";
                }
            } else if (computerItem == "Scissors") {
                if (humanItem == "Rock") {
                    winnerIs = "Human";
                } else if (humanItem == "Paper"){
                    winnerIs = "Computer";
                } else {
                    winnerIs = "Tie";
                }
            }

            console.log("determineWinner loop winnerIs var is: " + winnerIs);
            return winnerIs
    }

    numOfRounds = prompt("How many rounds would you like to play?")
    console.log("Number of rounds chosen: " + numOfRounds);

    for (let i = 1; i <= numOfRounds; i++) {
        console.log("***********Round " + i +"**************");

    
    humanChoice = getHumanChoice();
    console.log("Main Loop humanChoice var is: " + humanChoice);
        /* humanResult in getHumanChoice function should equal humanChoice variable*/


    computerChoice = getComputerChoice();
    console.log("Main Loop computerChoice var is: " + computerChoice);
        /* computerChoice in getComputerChoice function should equal computerChoice variable*/

    winner = determineWinner(humanChoice, computerChoice);
    console.log("Main Loop winner var is:" + winner);

    

    

    console.log("Scores before round were: \n" + "Computer Score: " + compScore + "\n" + "Human Score: " 
        + humanScore);
    
    if (winner == "Human" | winner == "Computer"){
        if (winner == "Human") {
            humanScore = humanScore + 1;
        } else {
            compScore = compScore +1;
        }
    }
    console.log("Scores after this round are: \n" + "Computer Score: " + compScore + "\n" + "Human Score: " 
        + humanScore);

}






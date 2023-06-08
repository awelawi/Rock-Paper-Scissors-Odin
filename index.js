document.addEventListener("DOMContentLoaded", function(){
    /**
     * Defining  vars to keep score track
     */
    let computer_plays = 0;
    let user_plays = 0;
    let user_wins = 0;
    let computer_wins = 0;

    /**
     * Retrieving the elements by their ID
     *
     * */
    let current_tally = document.getElementById("current-status");
    let rock_button = document.getElementById("rock-btn");
    let paper_button = document.getElementById("paper-btn");
    let scissors_button = document.getElementById("scissors-btn");
    let user_plays_display = document.getElementById("user-number-of-plays");
    let computer_plays_display = document.getElementById("computer-number-of-plays");
    let winner = document.getElementById("declared-winner");

    /**
     * Button Event Listeners
     */
    rock_button.addEventListener("click", () => {
        handlePlayerChoice("rock");
    })

    paper_button.addEventListener("click", () => {
        handlePlayerChoice("paper");
    })

    scissors_button.addEventListener("click", () => {
        handlePlayerChoice("scissors");
    })

    /**
     * 
     * @returns the computer's choice
     */
    function getComputerChoice () {
        const rock = "rock"
        const paper = "paper"
        const scissors = "scissors"

        // obtaining a random number between 1 and 3
        let number = Math.floor(Math.random() * 3) + 1;
        switch(number){
        case 1:
            return rock;
        
        case 2:
            return paper;

        case 3:
            return scissors;
        }
    }

    /**
     * This method takes in the player choice and sends it to the playRound function
     * It also keeps track of how long the computer and user have been playing for using a helper fucntion: numberOfPlays
     * @param {*} playerSelection 
     */
    function handlePlayerChoice(playerSelection){
        if (numberOfPlays()){
            console.log("We have come to the end of the game");
            winner.textContent = whosTheWinner();
            return;
        }
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        current_tally.textContent = `Current Status: ${result}`;
        user_plays_display.textContent = `You have played a total of ${user_plays}`;
        computer_plays_display.textContent = `The computer has played a total of ${computer_plays}`;
    }

    /**
     * Score Updates
     */
    function whosTheWinner(){
        if (user_wins > computer_wins){
            return `The user has won with a total of ${user_wins} wins`;
        }

        else{
            return `Yikes you lost ://. The computer won by ${computer_wins} points`
        }
    }
    /**
     * Returns true if the number of user and computer plays is 5
     */
    function numberOfPlays(){
        if (computer_plays == 5 || user_plays == 5) {
            return true
        }
        return false;
    }

    /**
     * Plays round with the computer
     * @param {*} playerSelection 
     * @param {*} computerSelection 
     * @returns String
     */
    function playRound (playerSelection, computerSelection) {
        let result = "";
        user_plays++;
        computer_plays++;
        if (playerSelection === computerSelection)  {
            result = "It's a tie we have " + playerSelection + " and " + computerSelection;
        }

        if (
            (playerSelection === "rock") && (computerSelection === "scissors") ||
            (playerSelection === "paper") && (computerSelection === "rock") ||
            (playerSelection === "scissors") && (computerSelection === "paper")
            ) {
            user_wins++;
            result = "You win " + playerSelection + " beats " + computerSelection;
        }

        if (
            (computerSelection === "rock") && (playerSelection === "scissors") ||
            (computerSelection === "paper") && (playerSelection === "rock") ||
            (computerSelection === "scissors") && (playerSelection === "paper")
        ) {
            computer_wins++;
            result = "You lose " + computerSelection + " beats " + playerSelection;
        }

        return result;
    }
})

// obtaining computer choice
function getComputerChoice(){
    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"

    // obtaining a random number between 1 and 3
    let number  = Math.floor(Math.random() * 3) + 1
    if (number == 1){
        return rock;
    }

    else if(number == 2){
        return paper;
    }

    else{
        return scissors;
    }
}
console.log(getComputerChoice())

// round between computer and player
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    var result = ""
    if (playerSelection == computerSelection){
        result = "It's a tie we have " + playerSelection + " and "+computerSelection
    }

    else if((playerSelection == "rock") && (computerSelection == "scissors")){
        result = "You win "+playerSelection+ " beats "+computerSelection
    }

    else if((playerSelection == "paper") && (computerSelection == "rock")){
        result = "You win "+playerSelection+ " beats "+computerSelection
    }

    else if((playerSelection == "scissors") && (computerSelection == "scissors")){
        result = "You win " + playerSelection + " beats " + computerSelection
    }

    else{
        result = "You lose " +computerSelection+ " beats "+playerSelection
    }

    return result
}
// playing 5 rounds of the game
function game(){
    plays = 1
    player_wins = 0
    ties = 0
    while (plays <= 5){
        var computer_choice = getComputerChoice()
        console.log("We're playing rock-paper-scissors")
        var user_choice = prompt("Choose between rock/paper/scissors: ")
        var result = playRound(user_choice, computer_choice)
        if (result.includes("You win")){
            player_wins++
        }

        else if(result.includes("tie")){
            ties++
        }
        console.log(result)
        plays++
    }
    return(`You won ${player_wins} out of 5 games`)
}
console.log(game())
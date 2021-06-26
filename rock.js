const rock = 1;
const paper = 2;
const scissors = 3;

function getMatchResult(player1, player2) {
    if (player1 == player2) {
        return 0
    }
    if (player1 == rock && player2 == paper) {
        return 2
    }
    if (player1 == paper && player2 == scissors) {
        return 2
    }
    if (player1 == scissors && player2 == rock) {
        return 2
    }

    return 1;

}

function getRandomNumber(min, max) {
    var random = Math.random();
    var range = max - min;
    return Math.round(min + random * range);
}

function getChoiceLabel(choice) {
    if (choice === rock)
        return "rock";
    if (choice === paper)
        return "paper";
    if (choice === scissors)
        return "scissors";
}

function getWinningChoice(player1) {
    if (player1 == rock) {
        return paper;
    }
    if (player1 == paper) {
        return scissors;
    }
    if (player1 == scissors) {
        return rock;
    }
    return rock;
}

var player1points = 0
var player2points = 0
var player1Previous = 0;

function loop() {
    let player1 = prompt("Player 1 (rock=1,paper=2,scissors=3)")
//    let player2 = prompt("Player 2 (rock=1,paper=2,scissors=3)")
//    let player2 = getRandomNumber(1, 3);
    let player2 = getWinningChoice(player1Previous);

    player1 = Number(player1);
    player2 = Number(player2);


    let result = getMatchResult(player1, player2)


    if (result == 1 ){
      player1points= player1points + 1 
    }
    if (result == 2){
        player2points= player2points + 1
    }

    alert(`Choices (Player 1 / Player 2): ${getChoiceLabel(player1)} / ${getChoiceLabel(player2)}`);
    alert(`Result: ${result}`);
    alert(`Points (Player 1 / Player 2): (${player1points} / ${player2points})`)

    player1Previous = player1;

    loop()
}
loop()
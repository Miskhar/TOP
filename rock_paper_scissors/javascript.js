let playerScore = 0;
let cpuScore = 0;
let cpuRand = 0;
let playerSelection = null;
let whoWins = null;
let tempWeap = null;
let winner = null;
let cpuSelection = null;
// Convert the strings to a numbers
cpuRand = Number(cpuRand);
playerScore = Number(playerScore);
cpuScore = Number(cpuScore);

function genRandomNumber() {
    // Generate a pseudo-random num between 1-3
    cpuRand = Math.round((Math.random() * 2) +1);
    return cpuRand;
}

function cpuWeaponSelect() {
    let selection = genRandomNumber();
    // CPU selections:
    // 1 = Rock
    // 2 = Paper
    // 3 = Scissors
    if (selection === 1) {
        selection = "rock";
    } else if (selection === 2 ) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    return (selection);
}

function scoreUpdate(playerScore, cpuScore, cpuSelection) {
    // Update the player score and enemy score
    document.getElementById("pScore").innerHTML = `Player Score: ${playerScore}`;
    document.getElementById("cScore").innerHTML = `Enemy Score: ${cpuScore}`;
    // Display what weapon the enemy chose (Practice capitalizing as well, why not?)
    document.getElementById("enemyChoice").innerHTML = `Enemy Chose: ${cpuSelection[0].toUpperCase() + cpuSelection.substring(1)}`;
}

function roundLogic(playerSelection, cpuSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (cpuSelection.toLowerCase() === "rock") {
            return whoWins = "tie";
        } else if (cpuSelection.toLowerCase() === "paper") {
            return whoWins = "cpu";
        } else {
            return whoWins = "player";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (cpuSelection.toLowerCase() === "rock") {
            return whoWins = "player";
        } else if (cpuSelection.toLowerCase() === "paper") {
            return whoWins = "tie";
        } else {
            return whoWins = "cpu";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (cpuSelection.toLowerCase() === "rock") {
            return whoWins = "cpu";
        } else if (cpuSelection.toLowerCase() === "paper") {
            return whoWins = "player";
        } else {
            return whoWins = "tie";
        }
    } 
    // Needs to return "player" or "cpu"
}


function playRound(playerSelection) {
    cpuSelection = cpuWeaponSelect();
    whoWins = roundLogic(playerSelection, cpuSelection);
    if (whoWins.toLowerCase() === "player") {
        ++playerScore;
    } else if (whoWins.toLowerCase() === "cpu") {
        ++cpuScore;
    }
    if (whoWins.toLowerCase() === "tie") {
        tempWeap = cpuSelection;
        cpuSelection = `Enemy chose ${tempWeap}, so it is a DRAW!`;
    }
    scoreUpdate(playerScore, cpuScore, cpuSelection);
    if (Number(playerScore) === 5) {
        winner = "You"
        console.log("Player wins!!!");
        resetButton(winner);
    } else if (Number(cpuScore) === 5){
        winner = "Enemy"
        console.log("Enemy wins!!!");
        resetButton(winner)
    }
}

function resetButton (winner) {
    // Add a check to see if we have previously hidden the reset button, and if so, display it as a flex item
    if (document.getElementById("reset_button").style.display='none') {
        document.getElementById("reset_button").style.display='flex';
    }
    // We create the reset button; we need to use inline styling (I think), and we had to use a <p> tag to get the second sentence on a new line
    if (winner.toLowerCase() === "you") {
        document.getElementById("reset_button").innerHTML = `<button onclick="resetGame();" style="background: red; font-size: 2em; padding: 1em; border-radius: 12px">${winner} Won!<p>Try your luck again?</p></button>`
    }
    if (winner.toLowerCase() === "enemy") {
        document.getElementById("reset_button").innerHTML = `<button onclick="resetGame();" style="background: red; font-size: 2em; padding: 1em; border-radius: 12px">The ${winner} Won!<p>You might get them next time...</p></button>`
    }
    
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    playerSelection = whoWins = tempWeap = winner = null;
    document.getElementById("reset_button").style.display='none';
    scoreUpdate(playerScore, cpuScore, cpuSelection);
    
}

function playerSelectedRock() {
    playerSelection = "rock";
    console.log("player selected rock");
    playRound(playerSelection);
}

function playerSelectedPaper() {
    playerSelection = "paper";
    console.log("player selected paper");
    playRound(playerSelection);
}

function playerSelectedScissors() {
    playerSelection = "scissors";
    console.log("player selected scissors");
    playRound(playerSelection);
}
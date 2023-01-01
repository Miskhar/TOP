let playerScore = 0;
let cpuScore = 0;
let cpuRand = 0;
let playerSelection = null;
let whoWins = null;
let tempWeap = null;
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
    let cpuSelection = cpuWeaponSelect();
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
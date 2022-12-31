let playerScore = 0;
let cpuScore = 0;
let cpuRand = 0;
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

function scoreUpdate(playerScore, cpuScore) {
    document.getElementById("pScore").innerHTML = `Player Score: ${playerScore}`;
    document.getElementById("cScore").innerHTML = `Enemy Score: ${cpuScore}`;
}

function playerSelectedRock() {
    let cpuSelection = cpuWeaponSelect();
    let whoWins = null;
    if (cpuSelection.toLowerCase() === "rock") {
        whoWins = "tie";
    } else if (cpuSelection.toLowerCase() === "paper") {
        whoWins = "cpu";
    } else {
        whoWins = "player";
    }
    // alert("The winner is: " + whoWins);
    if (whoWins.toLowerCase() === "player") {
        ++playerScore;
    } else if (whoWins.toLocaleLowerCase() === "cpu") {
        ++cpuScore;
    }
    scoreUpdate(playerScore, cpuScore);
}

function playerSelectedPaper() {
    
}

function playerSelectedScissors() {
    
}
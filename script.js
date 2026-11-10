console.log("Hello World");
function getComputerChoice() {
    let angka = Math.random();
    if (angka < 0.33) {
        return "rock";
    } else if (angka < 0.66) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let jawaban = prompt("Pilih: rock,paper or scicor?");
    return jawaban;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Seri! kalian sama-sama pilih " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("kamu menang! " + humanChoice + " mengalahkan " + computerChoice);
    
    } else {
        console.log("kamu kalah! " + humanChoice + " melawan " + computerChoice);
    }
}

//===main satu ronde ====
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Skor: kamu " + humanScore +" - Komputer" + computerScore);

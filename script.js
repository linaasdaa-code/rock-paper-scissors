function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("Seri! Kalian sama-sama pilih " + humanChoice);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("Kamu menang! " + humanChoice + " mengalahkan " + computerChoice);
            humanScore++;
        } else {
            console.log("Kamu kalah! " + humanChoice + " melawan " + computerChoice);
            computerScore++;
        }

        console.log("Skor kamu " + humanScore + " - komputer " + computerScore);
    }

    // 5 ronde
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    // Pengumuman pemenang
    if (humanScore > computerScore) {
        console.log("🎉 KAMU MENANG GAME INI!");
    } else if (humanScore < computerScore) {
        console.log("😢 Komputer menang game ini.");
    } else {
        console.log("🤝 Hasil akhir seri!");
    }
}

playGame();
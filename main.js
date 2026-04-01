/*
    LET:
    0 = Rock
    1 = Paper
    2 = Scissors
*/
function getRandomNum(min, max){
    return Math.random() * (max - min) + min;
}

function getComputerChoice(){
    return parseInt(getRandomNum(0, 3));
}


function getHumanChoice(selection){
    switch (selection.toUpperCase()) {
        case "R":{
            return 0;
        }
        case "P":{
            return 1;
        }
        case "S":{
            return 2;
        }
        default:{
            return -1; //error
        }
    }
}

let humanScore = 0;
let CompScore = 0;

function playRound(humanSel, CompSel){
    switch (humanSel) {
        case 0:{ //rock
            if(CompSel == 0){ //rock
                alert("Rock Draw!")
            }else if(CompSel == 1){ //paper
                alert("Computer Wins with Paper!")
                CompScore++;
            }else{ //scissor
                alert("You Win with Rock!")
                humanScore++;
            }
            break;
        }
        case 1:{ //paper
            if(CompSel == 0){ //rock
                alert("You Win with Paper!")
                humanScore++;
            }else if(CompSel == 1){ //paper
                alert("Paper Draw!")
            }else{ //scissor
                alert("Computer Wins with Scissors!")
                CompScore++;
            }
            break;
        }
        case 2:{ //scissor
            if(CompSel == 0){ //rock
                alert("Computer Wins with Rock!")
                CompScore++;
            }else if(CompSel == 1){ //paper
                alert("You Win with Paper!")
                humanScore++;
            }else{ //scissor
                alert("Scissor Draw!")
            }
            break;
        }
        default:
            break;
    }
}



function playGame(humanSel){
    CompSel = getComputerChoice();
    playRound(humanSel, CompSel);
}

//playGame();
   let counter = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", e => {
    humanSel = getHumanChoice("R");
    playGame(humanSel);

});

paper.addEventListener("click", e => {
    humanSel = getHumanChoice("P");
    playGame(humanSel);

});

scissors.addEventListener("click", e => {
    humanSel = getHumanChoice("S");
    playGame(humanSel);

});

const darkmode = document.querySelector(".switch");

darkmode.addEventListener("click", e => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    darkmode.classList.toggle("light-mode");
})
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


function getHumanChoice(){
    const selection = prompt("Type Rock (R), Paper (P), or Scissor (S):");
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
                alert("You Win with Scissors!")
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



function playGame(){
    let counter = 0;
    while((humanScore + CompScore) != 5){ //best out of 5 rounds wins
        alert(`Current Score: You (${humanScore}) : Computer (${CompScore})
        Rounds Played: ${counter++}`);
        humanSel = getHumanChoice();
        CompSel = getComputerChoice();
        playRound(humanSel, CompSel);
    }
    alert((humanScore > CompScore) ? "You win!! :)" : "Computer wins :\\");
    alert(`Final Score: You (${humanScore}) : Computer (${CompScore})`);
}

playGame();


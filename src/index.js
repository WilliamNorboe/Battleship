import './style.css';

import { Player } from './player';

// let playerboard = document.querySelector("#playerboard");
// let aiboard = document.querySelector("#aiboard");
let boards = document.querySelector(".boards");

let human = Player(false);
let ai = Player(true);

human.gameboard.placeShip(4,5,5,"v");
human.gameboard.placeShip(4,6,5,"v");
human.gameboard.placeShip(3,7,7,"v");

ai.gameboard.placeShip(4,5,5,"h");
ai.gameboard.placeShip(1,5,5,"h");
ai.gameboard.placeShip(3,2,7,"h");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function renderBoards(){
    let playerboard = document.createElement("div");
    playerboard.id = "playerboard";
    let aiboard = document.createElement("div");
    aiboard.id = "aiboard";
    let opponentDiv = document.createElement("div");

    if(ai.gameboard.allSunk()){
        document.querySelector("#result").textContent = "Player 1 Win";
        ai.turn = false;
        human.turn = false;
    }
    else if(human.gameboard.allSunk()){
        document.querySelector("#result").textContent = "Player 2 Win";
        human.turn = false;
        ai.turn = false;
    }
    ai.attack(human);
    for(let i = 0; i < human.gameboard.board.length; ++i){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < human.gameboard.board[i].length; ++j){
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = "hsquare" + String(i) + String(j);
            square.textContent = human.gameboard.board[i][j];
            row.appendChild(square);
        }
        playerboard.appendChild(row);
    }
    
    ai.attack(human);
    for(let i = 0; i < ai.gameboard.board.length; ++i){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < ai.gameboard.board[i].length; ++j){
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = "asquare" + String(i) + String(j);
            square.textContent = ai.gameboard.board[i][j];
            square.addEventListener("click", ()=>{
                human.attack(ai, square.id);
                removeAllChildNodes(boards);
                renderBoards();
            });
            row.appendChild(square);
        }
        aiboard.appendChild(row);
    }
    boards.appendChild(playerboard);
    boards.appendChild(aiboard);
}

human.turn = true;
ai.turn = false;
renderBoards();

// while(!human.gameboard.allSunk() && !human.gameboard.allSunk()){

// }
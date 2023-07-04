import './style.css';

import { Player } from './player';

// let playerboard = document.querySelector("#playerboard");
// let aiboard = document.querySelector("#aiboard");
let boards = document.querySelector(".boards");
let orientationButton = document.querySelector("#orientation");

let human = Player(false);
let ai = Player(true);

let boats = [5, 4, 3, 3, 2];

// ai.gameboard.placeShip(4,5,5,"h");
// ai.gameboard.placeShip(1,5,5,"h");
// ai.gameboard.placeShip(3,2,7,"h");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let ori = "v";
orientationButton.addEventListener("click", ()=>{
    if(ori == "v"){
        ori = "h";
    }
    else{
        ori = "v";
    }
});

function placeBoats(){
    let playerboard = document.createElement("div");
    playerboard.id = "playerboard";
    for(let i = 0; i < human.gameboard.board.length; ++i){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < human.gameboard.board[i].length; ++j){
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = "hsquare" + String(i) + String(j);
            square.addEventListener("mouseover", ()=>(hoverBoat(square.id,ori)));
            square.addEventListener("mouseout", ()=>(unhoverBoat(square.id,ori)));
            square.addEventListener("click", ()=>(placeBoat(square.id,ori)));
            square.textContent = human.gameboard.board[i][j];
            row.appendChild(square);
        }
        playerboard.appendChild(row);
    }
    boards.appendChild(playerboard);
}

function placeBoat(id, orientation){
    // console.log(id);
    let row = Number(id[7]);
    let col = Number(id[8]);

    if(human.gameboard.placeShip(row,col,boats[0],orientation)){
        aiPlaceBoat();
        removeAllChildNodes(boards);
        placeBoats();
        boats.shift();
        if(boats.length == 0){
            document.getElementById("orientation").remove();
            removeAllChildNodes(boards);
            renderBoards();
        }
    }
}

function aiPlaceBoat(){
    let row;
    let col;
    let orientation;
    let valid = false;
    while(!valid){
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        orientation = Math.floor(Math.random() * 2);
        if(orientation == 0){
            orientation = 'v';
        }
        else{
            orientation = 'h';
        }
        valid = ai.gameboard.placeShip(row,col,boats[0],orientation);
    }
}

function unhoverBoat(id, orientation){
    console.log(id);
    let row = id[7];
    let col = id[8];
    if(orientation == "h"){
        row = Number(id[8]);
        col = Number(id[7]);
    }
    // document.getElementById(id).style.backgroundColor = "white";
    for(let i = row; i < 10; ++i){
        let nid = "hsquare" + String(i) + col;
        if(orientation == "h"){
            nid = "hsquare" +  col + String(i);
        }
        console.log(nid);
        document.getElementById(nid).style.backgroundColor = "white";
    }
}

function hoverBoat(id, orientation){
    // console.log(id);
    let row = Number(id[7]);
    let col = Number(id[8]);
    if(orientation == "h"){
        row = Number(id[8]);
        col = Number(id[7]);
    }
    if(row + boats[0] > 10){
        return;
    }
    // document.getElementById(id).style.backgroundColor = "green";
    for(let i = row; i < row + boats[0]; ++i){
        let nid = "hsquare" + String(i) + col;
        if(orientation == "h"){
            nid = "hsquare" +  col + String(i);
        }
        console.log(nid);
        document.getElementById(nid).style.backgroundColor = "green";
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
// renderBoards();
placeBoats();

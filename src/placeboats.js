import { renderBoards } from "./battleship";

let boards = document.querySelector(".boards");
let orientationButton = document.querySelector("#orientation");

let boats = [5, 4, 3, 3, 2];

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function placeBoats(human, ai) {
  let ori = "v";
  orientationButton.addEventListener("click", () => {
    if (ori == "v") {
      ori = "h";
    } else {
      ori = "v";
    }
  });
  let playerboard = document.createElement("div");
  playerboard.textContent = "Place Your boats";
  playerboard.id = "playerboard";
  for (let i = 0; i < human.gameboard.board.length; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < human.gameboard.board[i].length; ++j) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = "hsquare" + String(i) + String(j);
      square.addEventListener("mouseover", () =>
        hoverBoat(square.id, ori, "green")
      );
      square.addEventListener("mouseout", () =>
        hoverBoat(square.id, ori, "white")
      );
      square.addEventListener("click", () =>
        placeBoat(square.id, ori, human, ai)
      );
      square.textContent = human.gameboard.board[i][j];
      row.appendChild(square);
    }
    playerboard.appendChild(row);
  }
  boards.appendChild(playerboard);
}

function placeBoat(id, orientation, human, ai) {
  // console.log(id);
  let row = Number(id[7]);
  let col = Number(id[8]);
  console.log(human.gameboard);
  if (human.gameboard.placeShip(row, col, boats[0], orientation)) {
    aiPlaceBoat(ai);
    removeAllChildNodes(boards);
    placeBoats(human, ai);
    boats.shift();
    if (boats.length == 0) {
      document.getElementById("orientation").remove();
      removeAllChildNodes(boards);
      renderBoards(human, ai);
    }
  }
}

function aiPlaceBoat(ai) {
  let row;
  let col;
  let orientation;
  let valid = false;
  while (!valid) {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
    orientation = Math.floor(Math.random() * 2);
    if (orientation == 0) {
      orientation = "v";
    } else {
      orientation = "h";
    }
    valid = ai.gameboard.placeShip(row, col, boats[0], orientation);
  }
}

function hoverBoat(id, orientation, color) {
  let row = Number(id[7]);
  let col = Number(id[8]);
  if (orientation == "h") {
    row = Number(id[8]);
    col = Number(id[7]);
  }
  if (row + boats[0] > 10) {
    return;
  }
  for (let i = row; i < row + boats[0]; ++i) {
    let nid = "hsquare" + String(i) + col;
    if (orientation == "h") {
      nid = "hsquare" + col + String(i);
    }
    console.log(nid);
    document.getElementById(nid).style.backgroundColor = color;
  }
}

export { placeBoats };

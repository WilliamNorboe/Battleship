let boards = document.querySelector(".boards");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderBoards(human, ai) {
  let playerboard = document.createElement("div");
  playerboard.id = "playerboard";
  // playerboard.textContent = "Your Boats - Number Sunk = " + human.gameboard.shipsSunk;
  let aiboard = document.createElement("div");
  aiboard.id = "aiboard";
  aiboard.textContent = "Opponents Boats - Number Sunk = " + ai.gameboard.shipsSunk;

  if (ai.gameboard.allSunk()) {
    document.querySelector("#result").textContent = "Player 1 Win";
    ai.turn = false;
    human.turn = false;
  } else if (human.gameboard.allSunk()) {
    document.querySelector("#result").textContent = "Player 2 Win";
    human.turn = false;
    ai.turn = false;
  }
  ai.attack(human);
  for (let i = 0; i < human.gameboard.board.length; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < human.gameboard.board[i].length; ++j) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = "hsquare" + String(i) + String(j);
      square.textContent = human.gameboard.board[i][j];
      if(square.textContent == "H"){
        square.style.backgroundColor = "red";
      }
      else if(square.textContent == "M"){
        square.style.backgroundColor = "blue";
      }
      else if(/\d/.test(square.textContent)){
        square.style.backgroundColor = "#66FF99";
      }
      row.appendChild(square);
    }
    playerboard.appendChild(row);
  }

  ai.attack(human);
  for (let i = 0; i < ai.gameboard.board.length; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < ai.gameboard.board[i].length; ++j) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = "asquare" + String(i) + String(j);
      if (
        ai.gameboard.board[i][j] != "*" &&
        ai.gameboard.board[i][j] != "H" &&
        ai.gameboard.board[i][j] != "M"
      ) {
        square.textContent = "*";
          square.addEventListener("mouseover", () =>
            {square.style.backgroundColor = "green";}
          );
          square.addEventListener("mouseout", () =>
            {square.style.backgroundColor = "white";}
          );
      } else {
        square.textContent = ai.gameboard.board[i][j];
        if(square.textContent == "H"){
          square.style.backgroundColor = "red";
        }
        else if(square.textContent == "M"){
          square.style.backgroundColor = "blue";
        }
        else{
          square.addEventListener("mouseover", () =>
          {square.style.backgroundColor = "green";}
         );
         square.addEventListener("mouseout", () =>
           {square.style.backgroundColor = "white";}
         );
        }
      }
      square.addEventListener("click", () => {
        human.attack(ai, square.id);
        removeAllChildNodes(boards);
        renderBoards(human, ai);
      });
      row.appendChild(square);
    }
    aiboard.appendChild(row);
  }
  let test = document.createElement("div");
  test.textContent = "Your Boats - Number Sunk = " + human.gameboard.shipsSunk;
  playerboard.prepend(test);
  boards.appendChild(playerboard);
  boards.appendChild(aiboard);
}

export { renderBoards };

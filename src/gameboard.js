import { Ship } from "./ship.js";

const GameBoard = () => {
  const createBoard = () => {
    let b = [];
    for (let i = 0; i < 10; ++i) {
      let row = [];
      for (let j = 0; j < 10; ++j) {
        row.push("*");
      }
      b.push(row);
    }
    return b;
  };
  let board = createBoard();
  let ships = [];
  let shipsSunk = 0;
  const placeShip = (i, j, length, alignment) => {
    let ship = Ship(length);

    if (alignment === "v") {
      if (i + ship.length > 10) {
        return false;
      }
      ship.id = ships.length;
      for (let k = i; k < i + ship.length; ++k) {
        if (board[k][j] != "*") {
          return false;
        }
      }
      for (let k = i; k < i + ship.length; ++k) {
        board[k][j] = String(ship.id);
      }
    } else if (alignment === "h") {
      if (j + ship.length > 10) {
        return false;
      }
      ship.id = ships.length;
      for (let k = j; k < j + ship.length; ++k) {
        if (board[i][k] != "*") {
          return false;
        }
      }
      for (let k = j; k < j + ship.length; ++k) {
        board[i][k] = String(ship.id);
      }
    }
    ships.push(ship);
    return true;
  };
  const receiveAttack = (row, col) => {
    if (board[row][col] == "H" || board[row][col] == "M") {
      return false;
    }
    if (board[row][col] != "*") {
      for (let k = 0; k < ships.length; ++k) {
        if (ships[k].id == board[row][col]) {
          ships[k].hit();
          if (ships[k].isSunk()) {
            shipsSunk++;
          }
          board[row][col] = "H";
          break;
        }
      }
    } else {
      board[row][col] = "M";
    }
    return true;
  };
  const allSunk = () => {
    if (ships.length - shipsSunk <= 0) {
      return true;
    }
    return false;
  };
  return {
    get board() {
      return board;
    },
    placeShip,
    receiveAttack,
    ships,
    allSunk,
    get shipsSunk() {
      return shipsSunk;
    },
  };
};

export { GameBoard };

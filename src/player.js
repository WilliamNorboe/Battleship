import { GameBoard } from "./gameboard";

const Player = (ai) => {
  let gameboard = GameBoard();
  let turn = false;
  let hit = false;
  const attack = (opponent, id) => {
    // console.log(id);
    if (turn) {
      if (ai) {
        let i = -1;
        let j = -1;
        turn = false;
        opponent.turn = true;
        if(hit){
          i = hit[0];
          j = hit[1];
          let pattern = /^[0-9*]*$/;
          if(i-1 >= 0 && opponent.gameboard.board[i-1][j].match(pattern)){
            opponent.gameboard.receiveAttack(i-1, j);
            return;
          }
          else if(i+1 <= 9 && opponent.gameboard.board[i+1][j].match(pattern)){
            opponent.gameboard.receiveAttack(i+1, j);
            return;
          }
          else if(j+1 <= 9 && opponent.gameboard.board[i][j+1].match(pattern)){
            opponent.gameboard.receiveAttack(i, j+1);
            return;
          }
          else if(j-1 >= 0 && opponent.gameboard.board[i][j-1].match(pattern)){
            opponent.gameboard.receiveAttack(i, j-1);
            return;
          }
          hit = false;
        }
        i = Math.floor(Math.random() * 10);
        j = Math.floor(Math.random() * 10);
        while (
          opponent.gameboard.board[i][j] == "H" ||
          opponent.gameboard.board[i][j] == "M"
        ) {
          i = Math.floor(Math.random() * 10);
          j = Math.floor(Math.random() * 10);
        }
        opponent.gameboard.receiveAttack(i, j);
        if(opponent.gameboard.board[i][j] == "H"){
          hit = [i, j];
        }
        return;
      } else if (opponent.gameboard.receiveAttack(id[7], id[8])) {
        turn = false;
        opponent.turn = true;
      }
    }
  };
  return {
    get gameboard() {
      return gameboard;
    },
    set turn(Turn) {
      turn = Turn;
    },
    get turn() {
      return turn;
    },
    attack,
  };
};

export { Player };

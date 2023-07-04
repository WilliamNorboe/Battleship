import { GameBoard } from "./gameboard"

const Player = (ai) => {
    let gameboard = GameBoard();
    let turn = false;
    const attack = (opponent, id) =>{
        // console.log(id);
        if(turn){
            if(ai){
                turn = false;
                opponent.turn = true;
                let i = Math.floor(Math.random() * 10);
                let j = Math.floor(Math.random() * 10);
                while(opponent.gameboard.board[i][j] == 'H' || opponent.gameboard.board[i][j] == 'M'){
                    i = Math.floor(Math.random() * 10);
                    j = Math.floor(Math.random() * 10);
                }
                opponent.gameboard.receiveAttack(i, j);
                return;
            }
            else if(opponent.gameboard.receiveAttack(id[7], id[8])){
                turn = false;
                opponent.turn = true;
            };
        }
    }
    return{
        get gameboard(){return gameboard},
        set turn(Turn){turn = Turn},
        get turn(){return turn},
        attack
    }
}

export{
    Player
}
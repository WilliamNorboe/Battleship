import './style.css';
import { placeBoats } from './placeboats';

import { Player } from './player';

// let playerboard = document.querySelector("#playerboard");
// let aiboard = document.querySelector("#aiboard");
let boards = document.querySelector(".boards");

let human = Player(false);
let ai = Player(true);

human.turn = true;
ai.turn = false;
// renderBoards();
placeBoats(human, ai);

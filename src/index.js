import "./style.css";
import { placeBoats } from "./placeboats";

import { Player } from "./player";

let boards = document.querySelector(".boards");

let human = Player(false);
let ai = Player(true);

human.turn = true;
ai.turn = false;


placeBoats(human, ai);

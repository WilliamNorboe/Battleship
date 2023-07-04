import { Ship } from "./ship";
import { GameBoard } from "./gameboard";

test('ship creation', ()=>{
    let ship = Ship(3);
    expect(ship.length).toBe(3);
});

test('ship hits', ()=>{
    let ship = Ship(4);
    ship.hit()
    expect(ship.numHit).toBe(1);
    ship.hit()
    expect(ship.numHit).toBe(2);
});


test('ship sunk', ()=>{
    let ship = Ship(3);
    ship.hit()
    expect(ship.numHit).toBe(1);
    ship.hit()
    expect(ship.numHit).toBe(2);
    ship.hit()
    expect(ship.numHit).toBe(3);
    expect(ship.isSunk()).toBe(true);
});

test('testing firing', ()=>{
    let g = GameBoard();
    g.placeShip(3,5, 5, 'h');
    g.placeShip(4,5, 1, 'h');
    g.receiveAttack(4,5);
    g.receiveAttack(4,4);
    expect(g.ships[1].numHit).toBe(1);
    expect(g.ships[1].isSunk()).toBe(true);
    expect(g.allSunk()).toBe(false);
    for(let i = 5; i < 10; ++i){
        g.receiveAttack(3,i);
    }
    expect(g.allSunk()).toBe(true);
    console.log(g.board);
});
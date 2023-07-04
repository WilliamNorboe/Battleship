

const Ship = (length) => {
    let numHit = 0;
    let sunk = false;
    let id;
    let hit = () => {
        numHit++;
    }
    let isSunk = () => {
        if(length - numHit <= 0){
            return true;
        }
        return false;
    }
    return{
        isSunk,
        length,
        get numHit(){return numHit},
        hit,
        id
    }
};

export{
    Ship,
}
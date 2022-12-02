const fs = require('fs');

const test = [3,4,3,1,2];
let data = test

let fishes = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
}

data.forEach(fish => {
    fishes[fish] += 1;
    });
console.log(fishes)
for (let i = 0; i < 256; i++) {
    let tmpFishes = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    }
    for (let i = 0; i <= 8; i++) {
        if (i === 0) {
        tmpFishes[6] += fishes[i];
        tmpFishes[8] += fishes[i];
        } else {
        tmpFishes[i - 1] += fishes[i]
        }
    }
    fishes = tmpFishes;
}
console.log("Fishes", Object.values(fishes).reduce((acc, val) => {
return acc + val
}, 0))


const fs = require('fs');
const test = [3,4,3,1,2];
const data = fs.readFileSync('input.txt', 'utf8').split(','); //read inputfile
const days = 256;

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

for (let i = 0; i < days; i++) {
    tmpFishes = {
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
        }
        else {
            tmpFishes[i-1] += fishes[i]
        }
    }
    fishes = tmpFishes;
}
console.log(Object.values(fishes).reduce((total, value) => {

    return total + value
}))

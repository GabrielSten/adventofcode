const fs = require('fs');
const test = [3,4,3,1,2];
const data = fs.readFileSync('input.txt', 'utf8').split(','); //read inputfile
const days = 180;
let fish = test;
t = [];

console.log('input.txt file read');

function generations(days) {
    for (i=1; i<=days; i++) {
        let newFish = 0
        fish = fish.map((f) => {
            let tmp = f
            if (f === 0) {
                newFish += 1
                tmp = 6
                }
            else {
                tmp = (f-1)
            }
            return tmp
        })

        if (newFish > 0) {
            for (let j=1; j<=newFish; j++) {
                fish.push(8)
            }
        }
        
    }
}
generations(days)
console.log(fish.length)

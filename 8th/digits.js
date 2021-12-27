/*
1 - 2 segments
4 - 4 segments
7 - 3 segments
8 - 7 segments
*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8').split('\n'); //read inputfile
let test = [];
data.forEach(x => {
    test.push(...x.split(' | '))
})
let outData = [];
for (let i=1; i<=test.length; i=i+2) {
    outData.push(test[i].split(' '))
}
console.log('input.txt file read');

function count(list) {
    list.forEach(word => {
        console.log(word.length)
    })
}

function count() {
    tmp = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    }
    for (let i=0; i<outData.length; i++) {
        outData[i].forEach(word => {
            if (word.length === 2) {
                tmp[1] += 1
            }
            if (word.length === 3) {
                tmp[7] += 1
            }
            if (word.length === 4) {
                tmp[4] += 1
            }
            if (word.length === 7) {
                tmp[8] += 1
            }
        })
    }
    console.log(Object.values(tmp).reduce((acc, val) => {
        return acc + val
    }))
}

console.log(outData)
count()
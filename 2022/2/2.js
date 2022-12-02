const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'
/* A: Rock B: Paper C: Scissors */
/* X: Rock Y: Paper Z: Scissors */
/* X: lose Y: draw Z: win */
/* 1 for Rock, 2 for Paper, and 3 for Scissors */
/* 0 if you lost, 3 if the round was a draw, and 6 if you won */
test = [['A','Y'], ['B','X'], ['C','Z']]
const text = readFile(file).split(/\r?\n/)
data = []
text.map((x) => {
    data.push([x[0], x[2]])

})

const winScore = (x, y) => {
    //draw
    if (x === 'A' && y === 'X') {return 3}
    if (x === 'B' && y === 'Y') {return 3}
    if (x === 'C' && y === 'Z') {return 3}
    //win
    if (x === 'A' && y === 'Y') {return 6}
    if (x === 'B' && y === 'Z') {return 6}
    if (x === 'C' && y === 'X') {return 6}
    //lose
    if (x === 'A' && y === 'Z') {return 0}
    if (x === 'B' && y === 'X') {return 0}
    if (x === 'C' && y === 'Y') {return 0}
    else {
        return 'Something wrong, input: '+x+' , '+y
    }
}
const newData = (x, y) => {
    /* X: lose Y: draw Z: win */
    if (y === 'X') {
        if (x === 'A' ) {return 'Z'}
        if (x === 'B' ) {return 'X'}
        if (x === 'C' ) {return 'Y'}
    }
    if (y === 'Y') {
        if (x === 'A' ) {return 'X'}
        if (x === 'B' ) {return 'Y'}
        if (x === 'C' ) {return 'Z'}
    }
    if (y === 'Z') {
        if (x === 'A' ) {return 'Y'}
        if (x === 'B' ) {return 'Z'}
        if (x === 'C' ) {return 'X'}
    }
}

const selectionScore = (y) => {
    if (y === 'X') {return 1}
    if (y === 'Y') {return 2}
    if (y === 'Z') {return 3}
    else {
        return 'Something wrong, input: '+y
    }
}

const totalScore = (x) => {
    score = 0

    for (let i = 0; i < x.length; i++) {
        /* console.log('win '+winScore(x[i][0], x[i][1]) +', selection ' + selectionScore(x[i][1])) */
        score += winScore(x[i][0], x[i][1]) + selectionScore(x[i][1])

    }
    return score
}

let newDataArray = []
for (let i = 0; i < data.length; i++) {
/*     console.log(test[i])
    console.log(newData(test[i][0], test[i][1])) */
    newDataArray.push([data[i][0], newData(data[i][0], data[i][1])])
} 

//1st answer
console.log(totalScore(data))
// 2nd answer
console.log(totalScore(newDataArray))



const fs = require('fs');
const { Console } = require("console");
const { row, index, Infinity } = require('mathjs');
const util = require('util')
let board = [];

//read input
try {  
    data = fs.readFileSync('input2.txt', 'utf8'); //read inputfile
    data = data.split('\n'); //split string of data at "\n" (char for new line)   
    console.log('input2.txt file read');  
} 

catch(e) {
    console.log('Error:', e.stack);
}
//parse input.txt data into array of arrays [x1,y1,x2,y2]
const dataParsed = data.map((i) => {
    tmp = i.split(' -> ')
    tmp = [...tmp[0].split(','),...tmp[1].split(',')]
    tmp = tmp.map((i) => {
        return parseInt(i)
    })
    return tmp
})

function mkBoard() {
    //make array of arrays with zeros
    let row = [] 
    for (let i = 0; i<10; i++) {
        row = []
        for (let j = 0; j<10; j++) {
            row.push(0)
        }
    board.push(row)        
    }
}

function plot(data = dataParsed) {
    data.forEach((x) => {
        //if vertical line going upwards:
        if (x[1] === x[3] && x[0] > x[2] ) {
            for (let i=x[2]; i<=x[0]; i++) {
                board[i][x[1]] += 1
            }
        }
        
        //if vertical line going downwards
        else if (x[1] === x[3] && x[0] < x[2]) {
            console.log('yes')
            for (let i=x[0]; i<=x[2]; i++) {
                board[i][x[1]] += 1
            }
        }
        
        //if horizontal and going right
        else if (x[0] === x[2] && x[1] < x[3]) {
            for (let i=x[1]; i<=x[3]; i++) {
                board[x[0]][i] += 1
            }
        }
        
        //if horizontal and going left
        else if (x[0] === x[2] && x[1] > x[3]) {
            for (let i=x[3]; i<=x[1]; i++) {
                board[x[0]][i] += 1
            }
        }
        
        //if diagonal and going down right
        else if (x[1] < x[3] && x[0] < x[2]) {
            //console.log('diagonal down right : '+x)
            for (let i=x[1]; i<=x[3]; i++) {
                board[x[0]+i-x[1]][i] += 1
            }
        }
        
        //if diagonal and going down left
        else if (x[1] > x[3] && x[0] < x[2]) {
            //console.log('diagonal down left : '+x)
            for (let i=x[0]; i<=x[2]; i++) {
                board[x[0]+(i-x[0])][x[1]-(i-x[0])] += 1
            }
        }
        
        //if diagonal and up right
        else if (x[1] < x[3] && x[0] > x[2]) {
            //console.log('diagonal up right : '+x)
            for (let i=x[2]; i<=x[0]; i++) {
                board[x[0]-(i-x[2])][x[1]+(i-x[2])] += 1
                
            }
        }
        
        //if diagonal and going up left
        else if (x[1] > x[3] && x[0] > x[2]) {
            //console.log('diagonal up left : '+x)
            for (let i=x[3]; i<=x[1]; i++) {
                board[x[0]-(i-x[3])][x[1]-(i-x[3])] += 1
                
            }
        }
        
    })
}

function counter() {
    let counter = 0;
    board.forEach((row) => {
        row.forEach((value) => {
            if (value > 1) {
                counter += 1
            }
        })
    })
    return counter
}
mkBoard()
plot()
console.log(counter())
board.forEach((row) => {
    process.stdout.write(String(row)+'\n')
})
console.log(board[1][1])
//console.log(util.inspect(board, {showHidden: false, depth: null, colors: true}))


const myLogger = new Console({
    stdout: fs.createWriteStream("normalStdout.txt"),
    stderr: fs.createWriteStream("errStdErr.txt"),
  });

  myLogger.log(util.inspect(board, {maxArrayLength: 1000}))
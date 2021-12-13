const { count } = require('console');
let fs = require('fs');

//set this variable to the relevant input index (how many values have been given for the bingo?) 23 seems to be the first bingo
const INPUTINDEX = 46;
let bingoData = [];
let bingoNumbers = [];
let remainingNumbers = [];


//read input
try {  
    data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    data = data.split('\n'); //split string of data at "\n" (char for new line)
    //bingoData = bingoData.split
    inputList = data[0].split(','); //get first row and split data at ' '    
    console.log('input.txt file read');  
} 

catch(e) {
    console.log('Error:', e.stack);
}

function parseData(data) {
    //parse the first line for bingo numbers
    let tmp = data[0].split(',');
    let tmp2 = [];
    let tmp3 = [];
    for (let i = 0; i < INPUTINDEX; i++) {
        bingoNumbers.push(parseInt(tmp[i]));
    }
    //parse the bingodata as a "list of list" in bingoData
    for (let i = 2; i < data.length; i+=6) {
        tmp2 = [];
        tmp3 = [];
        tmp2.push(data[i].replaceAll('\n', ' '))
        tmp2.push(data[i+1].replaceAll('\n', ' '))
        tmp2.push(data[i+2].replaceAll('\n', ' '))
        tmp2.push(data[i+3].replaceAll('\n', ' '))
        tmp2.push(data[i+4].replaceAll('\n', ' '))
        tmp2 = String(tmp2)
        tmp2 = tmp2.replaceAll(',', ' ')
        for (let i = 0; i < tmp2.length; i+=3) {
            tmp3.push(parseInt(tmp2.substr(i,2)));
        
        }
    bingoData.push(tmp3) //push lists into bingoData and remainingNumbers
    remainingNumbers.push(tmp3)
    }
}

function checkBoard(board, numbers=bingoNumbers) {
    let counter = 0;
    for (let i = 0; i<5; i++) {
        counter = 0
        for (let j = 0; j<5; j++) {
            if (numbers.includes(board[j])) {
                counter += 1
            }
        }
        if (counter == 5) {
            return true
        }
    }
    return false
}
        

function findWinner(data=bingoData, input=bingoNumbers) {
    for (let i = 0; i < bingoData.length; i++) {
        if (checkBoard(data[i])) {
            console.log('BINGO! The winning board is : '+i)
        }
    }
}

parseData(data)
findWinner()
console.log(remainingNumbers.length)
//for (i = 0; i<bingoData.length; i++) {
//    if (checkBoard(bingoData[i])) {
//        console.log('BOARD FOUND AT INDEX : '+i)
//    }
//}
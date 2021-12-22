const { count } = require('console');
let fs = require('fs');

//set this variable to the relevant input index (how many values have been given for the bingo?) 23 seems to be the first bingo
const INPUTINDEX = 80;
let bingoData = [];
let bingoNumbers = [];
let remainingNumbers = [];
let boardWinner = [];
let looser = []


//read input
try {  
    data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    data = data.split('\n'); //split string of data at "\n" (char for new line)
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
    bingoData.push(tmp3) //push lists into bingoData
    }
}

function checkBoard(board, numbers=bingoNumbers) {
    let counter = 0;
    let boardremaining = []; //sending back the remaining values to "remainingNumbers variable"
    let flag = false;
    for (let i = 0; i<5; i++) {
        counter = 0
        for (let j = 0; j<5; j++) {
            if (numbers.includes(board[j+i*5])) {
                counter += 1
            }
            else {
                boardremaining.push(board[j+i*5])
            }
            if (counter == 5) {
                flag = true
            }
        } 
    }
    for (let i = 0; i<5; i++) {
        counter = 0
        for (let j = 0; j<25; j+=5) {
            if (numbers.includes(board[i+j])) {
                counter += 1
            }
            else {
                if (!boardremaining.includes(board[i+j])) {
                    boardremaining.push(board[i+j])
                }
            }
            if (counter == 5) {
                flag = true
            }
        }
    }
        
    
    remainingNumbers.push(boardremaining)
    return flag
}
        
function findWinner(data=bingoData, input=bingoNumbers) {
    for (let i = 0; i < bingoData.length; i++) {
        if (checkBoard(data[i])) {
            //console.log('BINGO! The winning board is : '+i)
            boardWinner.push(i)
        }
        else {
            looser.push(i)
        }
    }
}

function calculate(winner=boardWinner) {
    let sum = 0
    if (winner.length > 0) {
        console.log('BINGO!!! THE WINNER IS BOARD : '+winner)
        for (let i = 0; i<remainingNumbers[winner].length; i++) {
            sum += remainingNumbers[winner][i]
        }
    }
    else {
        console.log('No winner yet...')
    }
    return sum*bingoNumbers[bingoNumbers.length-1]
}

parseData(data)
console.log(findWinner())
console.log(calculate(98))
console.log(looser)


//const losernumbers = [];
//function looserFnc() {
//    for (let i=0; i<25; i++) {
//        if (!bingoNumbers.includes(bingoData[looser][i])) {
//            losernumbers.push(bingoData[looser][i])
//        }
//    }
//}

//looserFnc()
//console.log(losernumbers)
let fs = require('fs');

//set this variable to the relevant input index (how many values have been given for the bingo?) 23 seems to be the first bingo
var INPUTINDEX = 23;

//var bingoLines = [];
var data = '';
var inputValues = []

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

function bingoLineCheck(data, index) { //function to crossref input list with bingolines, outputs index if all five bingodata match the inputList
    let bingoValues = [];
    inputValues = []
    let flag = false;
    let true_count = 0;
    data = data[index]
    data = data.replaceAll('\n', ' ');
    for (let i = 0; i <= data.length; i+=3) { //parse bingovalues
        bingoValues.push(parseInt(data.substr(i,2)));
    }

    inputList = String(inputList).split(',');
    for (let i = 0; i <= INPUTINDEX; i++) { //parse inputvalues
        inputValues.push(parseInt(inputList[i]));
    }

    for (let i = 0; i <= inputValues.length-1; i++) { 
        flag = bingoValues.includes(inputValues[i])
        if (flag == true) {
            true_count+=1
        }
        
    }

    if (true_count == 5) {
        return [true, index]
    }
    else {
        return [false, index]
    }
}

function checkAllBingoLines(data) { //loop trough the whole inputfile and use bingoLineCheck() to find the winning bingoline
    let flag = false
    for (let i = 1; i <= data.length-1; i++) { //start at one to not crossref input with itself
        if (bingoLineCheck(data, i)[0]==true) {
            var result_line = bingoLineCheck(data, i)[1]
            console.log('BINGO! A full line is found at index '+result_line)//plus one to get the correct rownumber (starting at 1)
            flag = true
            break
        }
    }

    if (flag == false) {
        console.log('no bingo so far...')
    }

    return result_line
}

function calculateBingoBoard(data, index, inputValues) { //function to find the correct bingoboard and calculate final value using the found winning line
    let bingoBoards = [];
    let board = [];
    let unmarked = 0;
    for (let i = 2; i <= data.length-1; i += 6) { //first bingoboard start at data[2]
        bingoBoards.push(i)
    }

    for (let i = 0; i <= bingoBoards.length; i++) { //loop through data to find the proper bingoboard
        if (index <= bingoBoards[i]) {
            var correctBingoBoard = bingoBoards[i-1]
            //console.log(bingoBoards[i-1])
            break
        }

    }

    for (let i = correctBingoBoard; i < (correctBingoBoard+5); i++) { //get correct bingo values and add to "Board"
        
        for (let j = 0; j <= data[i].length; j+=3) { //parse bingovalues
            board.push(parseInt(data[i].substr(j,2)));
        }
    }
    
    for (let i = 0; i <= board.length-1; i++) {
        if (inputValues.includes(board[i])) {
            //console.log('included '+board[i])
        }
        else {
            unmarked += board[i]
        }
    }

    console.log('Unmarked values from the selected "bingo board" : ' + unmarked)
    console.log('Latest input value : ' + inputValues.at(-1))
    console.log('Final bingo value : ' + unmarked*inputValues.at(-1)) //not correct yet :-(

    return unmarked*inputValues.at(-1)
}

calculateBingoBoard(data, checkAllBingoLines(data), inputValues)

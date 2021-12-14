var data = [47, 35, 15, 93, 76]
var inputList = [35, 15]
remainingNumbers = [];
let bingoNumbers = [47, 51,  7, 21, 82, 61, 81, 25];
let board = [25, 29, 78, 57, 69,
    47 ,51,  7, 21, 82,
    61, 81, 99, 53, 30,
    50, 80, 41, 94, 46,
     9, 37, 48, 71, 91]

//console.log(data.includes(inputList[0]))

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
            console.log(counter)
            if (counter == 5) {
                flag = true
            }
        }
    }
    
    
    
    remainingNumbers.push(boardremaining)
    return flag
}
console.log(checkBoard(board))
console.log(remainingNumbers)
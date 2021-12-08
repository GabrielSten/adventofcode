let fs = require('fs');

//set this variable to the relevant input index (how many values have been given for the bingo?)
var INPUTINDEX = 23;

var bingoLines = [];
var data = '';

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
for (let i = 0; i <= data.length-1; i++) { //-1 because last row of data undefined for some reason
    if (data[i].length == 14) {
        bingoLines.push(i) //save lines used for bingo-data
    }
}

function bingoLineCheck(data, index) { //function to crossref input list with bingolines, outputs index if all five bingodata match the inputList
    let bingoValues = [];
    let inputValues = []
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
    //console.log(bingoValues)
    //console.log(inputValues)
    //console.log(true_count)
    if (true_count == 5) {
        console.log('BINGO! A full line is found at line '+(index+1))//plus one to get the correct rownumber (starting at 1)
        return true
        
    }
    else {
        return false
    }
}

function checkAllBingoLines(data) {
    let flag = false
    for (let i = 1; i <= data.length-1; i++) { //start at one to not crossref input with itself
        if (bingoLineCheck(data, i)==true) {
            flag = true
            break
        }
    }
    if (flag == false) {
        console.log('no bingo so far...')
    }
}

checkAllBingoLines(data)

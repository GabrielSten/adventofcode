//power consumption (gamma rate, epsilon rate) power = gamma*epsilon
var fs = require('fs');

var gamma = '';
var epsilon = [];

//read input
try {  
    var data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    var data = data.split('\n'); //split string of data at "\n" (char for new line)
console.log('input.txt file read');    
} 

catch(e) {
    console.log('Error:', e.stack);
}
var nrOfCols = data[0].length
var nrOfRows = data.length

function getColValue(x, n) { //function to get "column value" we need, 1 or 0
    var tmp = 0
    for (let i = 0; i < x.length; i++) {
        if (colValue != NaN) {
            tmp += parseInt(x[i][n])
        }
    }
    if (tmp > x.length/2) {//use tmp value and nr of rows in data to determine if 1 or 0
        return String(1)
    }
    else {
        return String(0)
    }
}

for (let i = 0; i < data[0].length; i++) { //run func on each column to get gamma and get the reverse for epsilon
    var colValue = getColValue(data, i)
    
    gamma += colValue
     
    if (getColValue(data, i)=='1') {
        epsilon += '0'
    }
    else {
        epsilon += '1'
    }
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);
console.log('Power consumption:', gamma*epsilon);

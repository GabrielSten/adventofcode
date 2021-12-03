var fs = require('fs');

try {  
    var data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    var data = data.split("\n"); // split string of data at "\n" (char for new line)
    console.log('input.txt file read');    
} catch(e) {
    console.log('Error:', e.stack);
}

var counter = 0; //counter for loop below
for (var i = 0; i < data.length; i++) {
    var tmp1 = (parseInt(data[i]) + parseInt(data[i+1]) + parseInt(data[i+2])); //str to int and added 3 values together
    var tmp2 = (parseInt(data[i+1]) + parseInt(data[i+2]) + parseInt(data[i+3])); //str to int and added 3 values together
    if (tmp2 > tmp1) {
        var counter = counter + 1
    }
}

console.log(counter);
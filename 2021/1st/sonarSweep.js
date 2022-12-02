var fs = require('fs');

try {  
    var data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    var data = data.split("\n"); // split string of data at "\n" (char for new line)
    console.log('input.txt file read');    
} catch(e) {
    console.log('Error:', e.stack);
}

var counter = 0;
for (var i = 0; i < data.length; i++) {
    //if (i+1 == data.length) {
    //    break //break if the whole file is read and there is no data[i+1] (why is there not an error for this like in python? "error index out of bounds" or similar..?
    //}
    // how is this not needed?
    var tmp1 = parseInt(data[i]) //str to int
    var tmp2 = parseInt(data[i+1]) //str to int
    if (tmp2 > tmp1) {
        var counter = counter + 1
    }
}

console.log(counter);
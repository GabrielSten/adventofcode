var fs = require('fs');

try {  
    var data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    var data = data.split("\n"); // split string of data at "\n" (char for new line)
    console.log('input.txt file read');    
} catch(e) {
    console.log('Error:', e.stack);
}

//console.log(parseInt(data[1]))
var counter = 0;
for (var i = 0; i < data.length; i++) {
    //var counter = 0;
    var tmp1 = parseInt(data[i]) //str to int
    var tmp2 = parseInt(data[i+1])
    if (tmp2 > tmp1) {
        var counter = counter + 1
    }
    
    
}

console.log(counter);
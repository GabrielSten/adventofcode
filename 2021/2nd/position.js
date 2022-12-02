var fs = require('fs');

var xlocation = 0
var depth = 0

try {  
    var data = fs.readFileSync('input.txt', 'utf8'); //read inputfile
    var data = data.split('\n'); // split string of data at "\n" (char for new line)
console.log('input.txt file read');    
} 

catch(e) {
    console.log('Error:', e.stack);
}
var pos_list = []
var counter = 0
for (let i = 0; i < data.length; i++) {
    var tmp = data[i].split(' ') //split each data at ' '
    pos_list.push(tmp) //add to pos_list
    counter = counter+1
  }

pos_list.forEach(function(item) {
    if (item[0] == 'forward') {
        xlocation += parseInt(item[1]) //add value to each variable
    }
    if (item[0] == 'up') {
        depth += -parseInt(item[1])
    }
    if (item[0] == 'down') {
        depth += parseInt(item[1])
    }

})

console.log(xlocation*depth)


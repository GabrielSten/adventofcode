var fs = require('fs');

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
    pos_list.push(tmp)
    counter = counter+1
  }

pos_list.forEach(function(item, index) {
    console.log(item[0], index)
    if (item[0] == 'forward') {
        console.log('this')
    }

})

//getCoord(pos_list)

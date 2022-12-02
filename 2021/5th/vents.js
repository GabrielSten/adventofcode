const fs = require('fs');
const math = require('mathjs') //will try the js math library to solve this task using matrices, think it could be a good approach.

let data = [];
let pdata = []; //parsed data with the format [[x1,y1,x2,y2], ...  ]
let matrix = math.zeros(1000,1000)

//read input
try {  
    data = fs.readFileSync('input.txt', 'utf8'); //read inputfile   
    console.log('input.txt file read');  
} 

catch(e) {
    console.log('Error:', e.stack);
}

function parseData() {
    let tmp = [];
    let tmp2 = []
    pdata = data.split('\n'); //split string of data at "\n" (char for new line)
    for (i = 0; i<pdata.length;i++) {
        tmp = [];
        //tmp.push(parseInt(pdata[i]))
        //tmp = pdata[i].split('->')
        //tmp.push(parseInt(tmp2))
        //pdata[i][0] = pdata[i][0].split(',')
        //pdata[i][1] = pdata[i][1].split(',')
        pdata.push(tmp)
    }
    pdata.push(tmp)
    
}

function plot() {
    tmp = [];
    for (let i = 0; i<10; i++) {
        
    }
}

parseData()
console.log(pdata.length)
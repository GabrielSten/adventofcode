const fs = require('fs');
const data = fs.readFileSync('test2.txt', 'utf8').split('\r\n'); //read inputfile
const parsedData = data.map(i => {
    i = i.replace(' |', '')
    tmp = i.split(' ')
    return tmp
});


const resultData = parsedData.filter(x => {
    return x.length < 5
});
const inputData = parsedData.filter(x => {
    return x.length > 4
});


findConfig(inputData[0])

function findConfig(x) {
    /*find what configuration it must be for the digit, see order below
     
     111
    2   3
     444
    5   6
     777

    */
    let conf = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0
    }
    x.forEach(i => {
        let word = i.split('')
        //if (i.length == )
        console.log(word)
    })
}


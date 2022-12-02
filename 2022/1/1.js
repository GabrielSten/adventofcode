const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

let data = []

const text = readFile(file).split(/\r?\n/)
text.map((x) => {data.push(parseInt(x))})

let count = 0
let gnomeDict = {}
let gnomeArray = []
let totalGnomeArray = []
let tmpGnome = []
let threeGnome = []

/* get array of arrays */
for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
        tmpGnome.push(data[i])
    }
    else {
        gnomeArray.push(tmpGnome)
        tmpGnome = []
    }
}

for (let i = 0; i < gnomeArray.length; i++) {
    let tmp = gnomeArray[i].reduce((a, b) => a + b, 0)
    console.log(tmp)
    gnomeDict['gnome'+i.toString] = tmp
    totalGnomeArray.push(tmp)
}

/* answer 1 */
console.log(Math.max(...totalGnomeArray));


totalGnomeArray.sort(function(a, b){return b-a});
/* answer 2 */
console.log(totalGnomeArray[0]+totalGnomeArray[1]+totalGnomeArray[2])
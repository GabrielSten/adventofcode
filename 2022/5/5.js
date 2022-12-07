const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

const text = readFile(file).split(/\r?\n/);
/* const text = readFile(file).split(/\r?\n/); */
let start = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': []
}

// parse starting position
const populateStart = ()=>{
    let start = {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': [],
        '9': []
    }
    for (i=0; i<8; i++) {
        const row = text[i].split(/[|]/)[0]
        for (j=1; j<36; j+=4) {
            if (row[j] != ' ') {
                start[String(((j-1)/4)+1)].push(row[j])
            }
        }
    }
    for (i=1; i<10; i++) {
        /* console.log(start[String(i)].reverse()) */
        start[String(i)] = start[String(i)].reverse()
    }
    return start
}
let startObj = populateStart()

/* for (i=0; i<8; i++) {console.log(start[String(i)].length)} */
//move [number of crates, starting pos, ending pos]

let move = []
for (i=10; i<text.length; i++) {
    const textString = text[i].split(/[ .\s]/)
    move.push([Number(textString[1]), Number(textString[3]), Number(textString[5])])
}

const crane = (seq) => {
    //number cranelifts
    for (j=0; j<seq[0]; j++) {

        const popped = startObj[String(seq[1])].pop()
        startObj[String(seq[2])].push(popped)
        /* console.log(from, to)
        console.log(startObj[String(seq[1])])
        console.log(popped) */

    }
}

/* console.log(startObj) */

for (i=0; i<move.length; i++) {
    crane(move[i])
}
console.log(startObj[String(1)].reverse()[0]+startObj[String(2)].reverse()[0]+startObj[String(3)].reverse()[0]+startObj[String(4)].reverse()[0]+startObj[String(5)].reverse()[0]+startObj[String(6)].reverse()[0]+startObj[String(7)].reverse()[0]+startObj[String(8)].reverse()[0]+startObj[String(9)].reverse()[0])



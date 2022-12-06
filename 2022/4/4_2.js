const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

const text = readFile(file).split(/\r?\n/);
data = []
data2 = []

// formatting ['36-92', '35-78'] to [[36,37, ... ,92], [36,37, ... ,78]]
text.map((x) => {
    const tmp = x.split(/,|-/);
    data.push([Number(tmp[0]), Number(tmp[1]), Number(tmp[2]), Number(tmp[3])])
})
text.map((x) => {
    const tmp = x.split(/,|-/);
    first = []
    second = []
    /* data.push([Number(tmp[0]), Number(tmp[1]), Number(tmp[2]), Number(tmp[3])]) */
    for (i=Number(tmp[0]); i<=Number(tmp[1]); i++) {
        first.push(i)
    }
    for (i=Number(tmp[2]); i<=Number(tmp[3]); i++) {
        second.push(i)
    }
    data2.push([first, second])
})



const getCommon = (pair) => {
    const common = pair[0].filter(value => pair[1].includes(value));
    if (!common.length) {return false}
    return common
}
let count = 0
for (i=0; i<data2.length; i++) {
    if (getCommon(data2[i])) {count++}
    /* console.log(getCommon(data2[i])) */
}
console.log(count)
const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

const text = readFile(file).split(/\r?\n/);
data = []
text.map((x) => {
    const [first, second] = [x.slice(0, x.length/2), x.slice(x.length/2)]
    data.push([first, second])
})

//adding the common items in format [first, second, [common item(s)]]
const dataItemArray = []
data.map((x)=>{
    const common = [...x[0]].filter(value => [...x[1]].includes(value));
    const commonUnique = [...new Set(common)]
    dataItemArray.push([x[0], x[1], commonUnique])
})
const prioValues = {}
const prioFinder = (s) => {
    if (s[0] == s[0].toLowerCase()) {
        /* console.log(s[0].charCodeAt(0) - 96) */
        return s[0].charCodeAt(0) - 96
    }
    /* console.log(s[0].charCodeAt(0) - 64 + 26) */
    return s[0].charCodeAt(0) - 64 + 26
}

const total = (array) => {
    let totalSum = 0
    array.map((x)=>{
        console.log(prioFinder(x[2]))
        totalSum += prioFinder(x[2])
    })
    return totalSum
}
//answer 1
console.log(total(dataItemArray))



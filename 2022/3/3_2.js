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

const prioFinder = (s) => {
    if (s[0] == s[0].toLowerCase()) {
        /* console.log(s[0].charCodeAt(0) - 96) */
        return s[0].charCodeAt(0) - 96
    }
    /* console.log(s[0].charCodeAt(0) - 64 + 26) */
    return s[0].charCodeAt(0) - 64 + 26
}

//answer 1
/* console.log(total(dataItemArray)) */
const data2 = []
for (i = 0; i < text.length; i+=3) {
    data2.push([text[i], text[i+1], text[i+2]])
}
const getCommon = (array) => {
    const common = [...array[0]].filter(value => [...array[1]].includes(value));
    const commonUnique = [...new Set(common)]
    const tmp = commonUnique.filter(value => [...array[2]].includes(value));
    return tmp[0]
}
getCommon(data2[0])
const badges = []
data2.map((x)=>{
    
    badges.push(getCommon(x))
})


const total = (array) => {
    let totalSum = 0
    array.map((x)=>{
        totalSum += prioFinder(x)
    })
    return totalSum
}
//answer 2
console.log(total(badges))
const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

const text = readFile(file).split('');

const check = (data) => {
    for (i=13; i<data.length; i++) {
        const tmp = [data[i],data[i-1],data[i-2],data[i-3],data[i-4],data[i-5],data[i-6],data[i-7],data[i-8],data[i-9],data[i-10],data[i-11],data[i-12],data[i-13]]
        const unique = [...new Set(tmp)]
        if (unique.length > 13) {
            return
        }
    }
}
check(text)
const math = require('mathjs')
let matrix = math.zeros(10,10)
let a = 1

matrix = math.subset(matrix, math.index(1,0), 1)
console.log(math.subset(matrix, math.index(0,0)))
console.log(matrix)
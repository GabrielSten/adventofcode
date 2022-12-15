const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

const text = readFile(file).split(/\r?\n/)
const data = []
text.map((x)=>{data.push(x.split(' '))})
// bigObj to hold size and files/dirs in each directory
let bigObj = {
    '/': []
}

const fill = (data) => {

    let dirFlag = false
    let currentDir = ['/']
    let dirLevel = 0
    for (i=0;i<data.length;i++) {
        // if listing dirs
        if (data[i][0] === '$' && data[i][1] === 'ls') {
            if (data[i-1][2] != '/') {
                
            }
        dirFlag = false
        }
        // if going down a level
        if (data[i][0] === '$' && data[i][1] === 'cd' && data[i][2] != '/' && data[i][2] != '..') {
            currentDir.push(data[i][2]) 
            dirFlag = false
            /* console.log(data[i][2]) */
            if (data[i][1] === 'cd') {
                if (data[i][2] != '/' && data[i][2] != '..') {
                    if (bigObj[data[i][2]] === undefined) {
                        bigObj[data[i][2]] = []
                    }
                }
            } 
        }
        // if going up a level
        if (data[i][0] === '$' && data[i][1] === 'cd' && data[i][2] === '..') {
            currentDir.pop() 
            dirFlag = false
        }
        // all of this stuff is "dir content, lets add it to the object with directories"
        if (data[i][0] != '$' ) {
            dirFlag = true
            const activeDir = currentDir[currentDir.length-1]
            const pushList = [data[i], currentDir.length]
            bigObj[activeDir].push(pushList)
        }
    }
}

fill(data)



// recursive function to give us sizes
const dirSize = (dir, depth) => {
    const list = bigObj[dir]
    let stringList = []
    let size = 0
    // get recursive depth
    if (typeof depth == 'number') {
        depth++}
    else {
        {depth = 1}
    }
    // loop
    list.map((x)=>{
        // is this a lowest level directory? if no recurse over lower directory
        if (x[0][0] === 'dir') {
            size += dirSize(x[0][1], depth)
        }
        // what files are in the dir? add their size
        if (Number(x[0][0])) {
            size += Number(x[0][0])
        }
    })
    console.log(`directory: ${dir} | depth: ${depth} | size: ${size}`)
    return size
}

let totalSize = 0

for (const x in bigObj) {
    const tmpSize = dirSize(x)
    let recursionCount = 0
    bigObj[x] = [bigObj[x], tmpSize]
    if (tmpSize<=100000) {
        totalSize+=tmpSize
    }
}

for (const x in bigObj) {
    console.log(bigObj[x])
}

// answer 1
console.log(totalSize)
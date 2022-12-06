const {readFile} = require('../../utils/utils')
const file = __dirname + '\\input.txt'

const text = readFile(file).split(/\r?\n/);
data = []

// formatting ['36-92', '35-78'] to [[36,37, ... ,92], [36,37, ... ,78]]
text.map((x) => {
    const test = x.split(',');
    let res = []
    let res2 = []
    
    test.map((x)=>{res.push(x.split('-'))})
    /* data.push([tmp1, tmp2]) */
    res.map((x)=>{
        let tmpArray = []
        for (i=x[0]; i<=x[1]; i++) {
            tmpArray.push(i)
        }
        res2.push(tmpArray)
    })
    data.push(res2)
})

function check(array) {
    let first = []
    let second = []
    array[0].map((x)=>{first.push(Number(x))})
    array[1].map((x)=>{second.push(Number(x))})
    const common = first.filter(value => second.includes(value));
    if (second[0]>first[0] && second[second.length-1]<first[first.length-1]) {
        console.log('true')
    }
    else if (second[0]<first[0] && second[second.length-1]>first[first.length-1]) {
        console.log('true2')
    }
    console.log(second[0], first[0], second[second.length-1], first[first.length-1])

}

/* check(data[10]) */
for (i=0;i<data.length;i++) {

    check(data[i])
}
/* console.log(data[0])  */
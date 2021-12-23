const fs = require('fs');
const test = [16,1,2,0,4,2,7,1,2,14];
const data = fs.readFileSync('input.txt', 'utf8').split(','); //read inputfile
console.log('input.txt file read');

const maxDist = Math.max(...test)
const minDist = Math.min(...test)

function checkFuelConsumption(x) {
    let fuel = 0;
    data.forEach(crab => {
        let tmpRange = Math.abs(crab-x)
        
        for (let i=1; i<= tmpRange; i++) {
            fuel += i
        }

    })
    //console.log(fuel)
    return fuel
}

function totalFuelConsumption() {
    let best = Infinity;
    let bestPos = 0;
    for (let i = 0; i<data.length; i++) {
        if (checkFuelConsumption(i) < best) {
            best = checkFuelConsumption(i)
            bestPos = i
        }
    }
    console.log('Best position is '+bestPos+', with the fuel consumption of '+best)
}

totalFuelConsumption()

var fs = require('fs');

try {  
    const input = fs.readFileSync('input.txt', 'utf8');
    console.log('input.txt read.');    
} catch(e) {
    console.log('Error:', e.stack);
}
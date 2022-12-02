const https = require('https');
  
// Sample URL
const url = 'https://adventofcode.com/2021/day/1/input';
  
const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
  
    response.on('end', () => {
        const body = data;
        console.log(body);
    });
})
  
request.on('error', (error) => {
    console.log('An error', error);
});
  
request.end() 
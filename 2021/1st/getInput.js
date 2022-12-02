const http = require('node:http');

var options = {
    host: 'https://adventofcode.com',
 /*    port: 80, */
    path: '/2021/day/1/input'
};
  
const payload = http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    console.log(res.statusMessage);

  }).on('error', function(e) {
    console.log("Got error: " + e.message);
});

const request = http.request(options, function (res){
    let data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
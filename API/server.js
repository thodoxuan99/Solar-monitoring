import('../suncalc/suncalc.js');
 var time = require('time');

const http = require('http');
const SunCalc = require('../suncalc/suncalc.js');
const { getPosition } = require('../suncalc/suncalc.js');
console.log(new Date(+7));
console.log(getPosition(new Date().toLocaleString("en-US", {timeZone:  'Asia/Ho_Chi_Minh'}),10.816572, 106.674488 ));
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

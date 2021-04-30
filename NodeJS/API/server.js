import('../suncalc/suncalc.js');
const http = require('http');
const SunCalc = require('../suncalc/suncalc.js');
const { getPosition } = require('../suncalc/suncalc.js');
// console.log(getPosition(new Date().toLocaleString("en-US", {timeZone:  'Asia/Ho_Chi_Minh'}),10.816572, 106.674488 ));
const hostname = '127.0.0.1';
const port = 3000;
// const lat = 10.816572
// const lng = 106.674488
// console.log(convertUTCDateToLocalDate(new Date(Date.now())))
// var date = convertUTCDateToLocalDate(new Date(Date.now()))
// var position = SunCalc.getPosition(new Date())
// console.log(position)

const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    console.log(data)
    var json = JSON.parse(data)
    var lat = json.lat
    var lng = json.lng
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var position = SunCalc.getPosition(new Date(),lat, lng)
    res.end(JSON.stringify(position));
  })
  
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

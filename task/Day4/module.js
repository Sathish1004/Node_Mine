// const fs= require('fs');
// fs.readFile('Calculator.txt',function(err,data) =>console.log(data));


const fs = require('fs');
fs.readFile('Calculator', 'utf8', (err, data) => console.log(data));

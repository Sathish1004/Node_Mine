const fs = require("fs");

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const number = 17;
const result5 = `${number} is ${isPrime(number) ? "a Prime" : "Not a Prime"} number.`;
fs.writeFileSync("prime.txt", result5);

console.log("Prime check written to file");
const read5 = fs.readFileSync("prime.txt", "utf8");
console.log(" File Content:", read5);

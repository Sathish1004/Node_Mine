const fs = require("fs");

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}

const result1 = "Factorial of 5 = {factorial(5)}";
fs.writeFileSync("factorial.txt", result1);
console.log("Factorial written to file");

const read1 = fs.readFileSync("factorial.txt", "utf8");
console.log("File Content:", read1);

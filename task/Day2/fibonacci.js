const fs = require("fs");

function fibonacci(n) {
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}

const fib = fibonacci(10);
fs.writeFileSync("fibonacci.txt", "Fibonacci Series: " + fib.join(", "));
console.log("Fibonacci written to file");

const read2 = fs.readFileSync("fibonacci.txt", "utf8");
console.log(" File Content:", read2);

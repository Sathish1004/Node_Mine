const fs = require("fs");

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const word = "madam";
const result3 = `${word} is ${isPalindrome(word) ? "a Palindrome" : "not a Palindrome"}`;
fs.writeFileSync("palindrome.txt", result3);

console.log("Palindrome result written to file");
const read3 = fs.readFileSync("palindrome.txt", "utf8");
console.log("File Content:", read3);

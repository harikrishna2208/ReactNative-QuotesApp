const fs = require("fs"); //FileSystem Library
var StringData = fs.readFileSync("MinimalQuotes.txt", "utf-8"); //ReadFile
var obj = JSON.parse(StringData);
let val = getRandomIntInclusive(0, 699);
console.log(obj[val].Quote + "\n \t \t \t \t" + obj[val].Author);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

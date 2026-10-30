const prompt = require("prompt-sync")();

let number = Number (prompt("Qual o número?"))

console.log("O último algarismo é:" + number %10) 
  



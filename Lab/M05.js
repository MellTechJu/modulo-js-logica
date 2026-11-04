const prompt = require("prompt-sync")();

let numeros = Number(prompt("Digite o número : "))
let soma = 0

while (numeros != 0) {
    let ultimo = (numeros % 10)
    numeros = Math.floor(numeros / 10)
    soma = soma + ultimo
}
console.log(soma)
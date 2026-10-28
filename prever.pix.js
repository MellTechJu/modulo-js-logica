const prompt = require("prompt-sync")();

let valor = Number (prompt("Qual o valor do pix?"));
const saldo = 300
while (valor <= 0) {
    console.log("Valor inválido.");
    valor = Number(prompt("Valor do pix:"));
}
console.log("Pix de R$", valor.toFixed(2))

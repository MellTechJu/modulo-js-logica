const prompt = require("prompt-sync")();

const deposito = Number(prompt("primeiro depósito: "));
const meta = Number(prompt("valor da meta: "))
let saldo = 0
let mes = 0
const taxa = 0.5 / 100

while (meta > saldo) {
   saldo = saldo + deposito 
     saldo = (saldo + (saldo * taxa))
     mes++
   }
console.log("Meses: " + mes)
console.log("Saldo: R$ " + saldo.toFixed(2))
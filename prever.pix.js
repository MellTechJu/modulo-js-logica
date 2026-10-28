const prompt = require("prompt-sync")();

let valor = Number (prompt("Qual o valor do pix?"));
let hora = Number (prompt("Que horas são?"))
let limiteNoturno = 220
const horarioLimite = 20
const saldo = 500


if (hora >= 20 || hora < 6)
    console.log("hora inválida"); 

 if (valor > limiteNoturno && hora > horarioLimite)
 //if(hora > horarioLimite || hora <23)
    console.log("pix negado")
else 
    
if (valor <= saldo ) {
console.log("Pix de R$", valor.toFixed(2))
console.log("Saldo restante:R$", saldo - valor.toFixed(2));

} else {
     console.log("Saldo insuficiente")
}

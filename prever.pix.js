const prompt = require("prompt-sync")();

let saldo = 500;

let valor = Number (prompt("Qual o valor do pix?"));
let horas = prompt ("Que horas são?"); 
if (horas = 20>=20) { 
    valor = 
    console.log("pix bloequado")
}
if (saldo>=valor) {
    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
} else {
    console.log("Saldo insuficiente");
}
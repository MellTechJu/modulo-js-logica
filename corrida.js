const prompt = require("prompt-sync")();

const TarifaBase = 5;
const valorPorMinuto = 0.5;
const valorKm = 2;

let minutos = Number (prompt("Quantos minutos a corrida tem?"));
let km = Number (prompt("Quantos KM a corrida tem?"));

let ValorDaCorrida = TarifaBase + valorKm * km + valorPorMinuto * minutos;
console.log("R$: " + ValorDaCorrida.toFixed (2))


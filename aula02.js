// let km = "9";
// km = km + 3;
// console.log("o valor da variável KM é:"+ km) 

// console.log(typeof km)

//A

// let  = 8;
// let  = 20;
// let valorDaCorrida = 5 + 2 *  +  * 0.5
// console.log("R$: " + valorDaCorrida.toFixed(2))

//Abaixo 

const TarifaBase = 5;
const valorKm = 2;
const valorPorMinuto = 0.5;
let km = 15;
let minuto = 45;
let ValorDaCorrida = TarifaBase + km * valorKm + minuto *valorPorMinuto
console.log("R$: " + ValorDaCorrida.toFixed(2))
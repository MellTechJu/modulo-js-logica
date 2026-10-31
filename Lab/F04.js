const prompt = require("prompt-sync")();
let numero = Number(prompt(" ")) 

if (Number.isInteger(numero) === true) {
 if (numero >= 0 && numero % 2 === 0) {   // o sinal % é para indicar o que "sobra"
 //  de uma divisão por 2.
// === é perguntando "o que sobre é igual a 0?" se sobra 1, é porque é ímpar.
    console.log("par")
} else {
    console.log("ímpar")
}
} else {
    Number.isInteger(NaN) === false  
    console.log(NaN)
}


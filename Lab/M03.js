const prompt = require("prompt-sync")();
let valorCompra = Number (prompt("Qual o valor da compra?"))
let descontoMenor = Number (valorCompra * 10 / 100) 
let descontoMaior = Number (valorCompra * 15 / 100)

if (valorCompra > 100 && valorCompra <=300) {
    console.log("Total : R$", (valorCompra - descontoMenor).toFixed(2));}

     else if (valorCompra> 300) {  //testando com o else if deu mais certo
    console.log("Total : R$ ", (valorCompra - descontoMaior).toFixed(2));}

      else if (valorCompra<0) {  //pra ele nãoa ceitar numeros negativos
        console.log(false)
     }

 else  {
console.log("Total: R$ ", valorCompra.toFixed(2));
}

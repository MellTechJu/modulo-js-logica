//O problema
// Uma loja dá desconto conforme o valor da compra: até R$ 100,00, nenhum desconto;
//  acima de R$ 100,00 e até R$ 300,00, 10%; acima de R$ 300,00, 15%. O desconto vale
//  sobre o valor inteiro da compra. Mostre quanto o cliente paga.

// entrada ->Um número V (0 < V ≤ 100.000), o valor da compra.

// saida -> Uma linha: Total: R$ X, com X em duas casas decimais

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

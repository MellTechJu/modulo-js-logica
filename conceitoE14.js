let hora = 23;
let saldo = 500;
let valor = 200;

// esse sinal --> || significa OU (se um der TRUE, estão é TRUE). Ele é um operador lógico.
// Se qualquer um dos lados for verdadeiro, então é true. 
// esse sinal && é um operador lógico que E (ambos precisam dar TRUE/VERDADEIRO), em uma condição, obriga que os dois lados sejam
//  verdadeiros ou falsos para dar verdadeiro.

console.log("A resposta é: ", hora >= 20) //true
console.log("A resposta é: ", hora < 6) //false 
console.log("A resposta é: ", hora >=20 || hora < 6) // true 
console.log("A resposta é: ", hora >=20 && hora < 6) //false


if (hora >= 20 && hora < 6) {
    console.log("Aqui!") //caminho VERDADEIRO (true)
} else {
    console.log("Ou aqui?") // caminho FALSO (false)
}
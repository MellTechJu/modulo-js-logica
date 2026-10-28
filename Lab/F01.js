const prompt = require("prompt-sync")();

let number= [167, 4523, 78, 990, 23, 1, 373]
// const numero= number[0] %10
for(let i= 0; i < number.length;i++) {  //uso do lenght apenas quando usar "for" para percorrer listas
    console.log("O último algarismo é:" + number[i] %10)  // estava usando aqui colocando number.lenght[i]
    //e ficava dando NaN. Aprendi já.
    //Repeti duas vezes pra ver se havia entendido. Precisei pesquisar e olhar as anotações da aula de ontem (27/10)
}




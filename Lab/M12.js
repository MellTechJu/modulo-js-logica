  
const prompt = require("prompt-sync")();

const medias1 = Number (prompt( "primeira média"))
const medias2 = Number (prompt( "segunda média"))
const medias3 = Number (prompt( "terceira média"))
let medias = (medias1 + medias2 + medias3) / 3
let recuperacao ;
let notaFinal ;

if (medias >= 7) { 
  console.log("aprovado");}

        else if (medias < 7 && medias >=5) { recuperacao = Number (prompt("nota da recuperação"))
         notaFinal = (medias + recuperacao) / 2
          if (notaFinal >=5) {  
          console.log("aprovado")}
          
          }
else { console.log("reprovado") }
           
       
          
      

    // else {  console.log("reprovado")}
// let notaRecuperacao = Number (prompt("nota da recuperação"))

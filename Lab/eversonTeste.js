  
const prompt = require("prompt-sync")();

const medias1 = Number (prompt( "primeira média"))
const medias2 = Number (prompt( "segunda média"))
const medias3 = Number (prompt( "terceira média"))
let calculoMedias = ((medias1 + medias2 + medias3) / 3)
let notaRecuperacao; 
let notafinal


if (calculoMedias >= 7) { 

  console.log("aprovado");
  
} else if  (  calculoMedias <7)
    {
         notaRecuperacao = Number (prompt("nota da recuperação"))
        notafinal = ( calculoMedias + notaRecuperacao) / 2
        if( notafinal >=5)
        {
            console.log("aprovado na recuperação")
        }else{
            console.log("reprovado")
        }
    }  



// let notaRecuperacao = Number (prompt("nota da recuperação"))
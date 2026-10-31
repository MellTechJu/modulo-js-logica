
const prompt = require("prompt-sync")();

let horas = Number (prompt("horas?"))
let minutos = Number (prompt("minutos?"))

console.log(horas*60 + minutos) //para converter horas em minutos (horas x 60) 
//soma com os minutos restantes 

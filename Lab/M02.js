const prompt = require("prompt-sync")();

let pessoas = Number (prompt("quantos alunos?" ))
let capacidade = Number (prompt ("quantos assentos?"))
let onibus = (pessoas / capacidade);

console.log(Math.ceil(onibus))

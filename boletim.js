//Precisei alterar 6 linhas para trocar a média de 7 para 6. 
// Mais 6 para trocar o resultado do else (senão) para Em recuperação

let aluno1 = "Ney"; 
let notaAluno1 = 5;
const media1 = 6

if (notaAluno1>=7) {
    console.log ("Aprovado");
} else {
    console.log("Em recuperação");
}

let aluno2 = "Maria"; 
let notaAluno2 = 8;
const media2 = 6

if (notaAluno2>=7) {
    console.log ("Aprovado");
} else {
    console.log("Em recuperação");
}

let aluno3= "Vanessa"
let notaAluno3= 8.5
const media3 = 6

if (notaAluno3=7){
    console.log ("Aprovado");
} else {
    console.log("Em recuperação");
}

let aluno4 = "Diana"
let notaAluno4 = 5
const media4 = 6

if (notaAluno4>=7) {
    console.log ("Aprovado");
} else {
    console.log("Em recuperação");
}

let aluno5 = "Vitor"
let notaAluno5 = 4.5
const media5 = 6

if (notaAluno5>=7) {
    console.log ("Aprovado");
} else {
    console.log("Em recuperação");
}

let aluno6 = "Sophia"
let notaAluno6 = 10
const media6 = 6

if (notaAluno6>=7) {
    console.log ("Aprovado");
} else {
    console.log("Em recuperação");
}



let nomes = ["Ney", "Fernando", "Vanessa", "Diana", "Vitor", "Sophia"]
let mediasAlunos = [5, 8, 8.5, 5, 4.5, 10]
const mediaEscola = 6

for (let i = 0; i < nomes.length; i++) 
   
if (mediasAlunos[i] >= mediaEscola) {
    console.log ("O aluno:" + nomes[i] + "está aprovado");
} else {
    console.log("O aluno :" + nomes[i] + "está reprovado");
}
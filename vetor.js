const medias = [4, 9, 7.8, 5.5, 8.5, 7, 7, 6] // posição começa do 0 no caso do ARRAY                           
const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio", "Junior", "Ana"] // no caso do length conta a partir do 1
const mediaEscola = 7;
console.log(medias[3] + " " + nomes[3]) //DIEGO 7 // {[ ]  <=-- serve para dizer a posição quer quer acessar }
//console.log(medias.length) //7

for (let i = 0; i < nomes.length; i++) 
   
if (medias[i] >= mediaEscola) {
    console.log ("O aluno:" + nomes[i] + "está aprovado");
} else {
    console.log("O aluno :" + nomes[i] + "está reprovado");
}

     // adicionei o "medias" para ver se as medias apareciam no terminal

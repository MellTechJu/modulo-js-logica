
// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];


const heroi = {
    nome: "Magno",
    vida: 10,
    dano: 3,
    veneno: 0,
    inventário: [],
    sorte: 0,
    experiencia: 0,
    mana: 0,
    critico: 0.2,
    danoCritico: 2
}
//"teste de alteração da propriedade, ao mudar a propriedade da CONSTANTE heroi
// eu consigo sem problemas, pois estou mudando uma propriedade da constante
// e não a constante e si"
console.log("Antes de mudar:", heroi.vida)

heroi.nome = "Joao"

console.log("Depois de mudar: ",heroi.nome)
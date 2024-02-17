// Desafio Classificador de Nível de Herói

// Defina o nome e a quantidade de experiência (XP) do herói
let nome = "LINK";
// Exemplo de XP, você pode alterar esse valor
let xp = 10;

// Utilizando uma estrutura de decisão para determinar o nível do herói com base na XP
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir mensagem nome do herói e seu nível
console.log("O Herói de nome " + nome + " está no nível de " + nivel);


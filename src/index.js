// Calculadora de partidas Rankeadas //

// Ultilizando 3 solcuções para o programa proposto //

// Opção 1: Utilizando estrutura de decisão if-else

 function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivelMap = {
        "Ferro": vitorias < 10,
        "Bronze": vitorias >= 10 && vitorias <= 20,
        "Prata": vitorias >= 21 && vitorias <= 50,
        "Ouro": vitorias >= 51 && vitorias <= 80,
        "Diamante": vitorias >= 81 && vitorias <= 90,
        "Lendário": vitorias >= 91 && vitorias <= 100,
        "Imortal": vitorias >= 101
    };

    let nivel = Object.keys(nivelMap).find(key => nivelMap[key]);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Opção 2: Utilizando um switch-case

 function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 10 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Opção 3: Utilizando um objeto de mapeamento

 function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivelMap = {
        "Ferro": vitorias < 10,
        "Bronze": vitorias >= 10 && vitorias <= 20,
        "Prata": vitorias >= 21 && vitorias <= 50,
        "Ouro": vitorias >= 51 && vitorias <= 80,
        "Diamante": vitorias >= 81 && vitorias <= 90,
        "Lendário": vitorias >= 91 && vitorias <= 100,
        "Imortal": vitorias >= 101
    };

    let nivel = Object.keys(nivelMap).find(key => nivelMap[key]);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}


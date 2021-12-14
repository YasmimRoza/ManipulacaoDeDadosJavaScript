const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9, 9.5];

function mediaSalas(somaNotas){
    const acumulaNotas = somaNotas.reduce((acumula, atual) => atual + acumula, 0);

    return acumulaNotas / somaNotas.length
}

console.log(`Média da sala JS: ${mediaSalas(salaJS)}`);
console.log(`Média da sala Java: ${mediaSalas(salaJava)}`);
console.log(`Média da sala Python: ${mediaSalas(salaPython)}`);

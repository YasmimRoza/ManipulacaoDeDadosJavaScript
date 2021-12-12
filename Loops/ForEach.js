const notas = [6, 8.9, 7.5, 10]

let soma = 0;

//Callback   , variáel declarada na hora de fazer a ArrowFunction
notas.forEach(nota => {
    soma += nota;
})

const media = soma / notas.length;

console.log(media);
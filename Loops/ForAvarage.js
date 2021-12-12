const notas = [6, 8.9, 7.5, 10]

let soma = 0;

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}

const media = soma / notas.length;

console.log(media);
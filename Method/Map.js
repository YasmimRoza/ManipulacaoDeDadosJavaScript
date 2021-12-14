const notas = [10, 9, 8, 7, 6];

console.log(notas);

const notasAtualizadas = notas.map( nota => 
    nota == 10 ? nota : ++nota
)

console.log(notasAtualizadas);
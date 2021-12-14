const nomes = [' Yasmim', 'Hanna', 'Gloria', 'Jessica']

const notas = [10, 5, 8, 2.7]

const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)
const idades = [30, 35, 28]
const nomes = ["Ana", "Juliana", "Leonardo"]
const faculdade = [false, true, true]

let funcionarios = [nomes,idades,faculdade]

console.log(`O ${funcionarios[0][0]}, tem a idade ${funcionarios[1][0]}, e fez faculdade ${funcionarios[2][0]}`)
console.log(`O ${funcionarios[0][1]}, tem a idade ${funcionarios[1][1]}, e fez faculdade ${funcionarios[2][1]}`)
console.log(`O ${funcionarios[0][2]}, tem a idade ${funcionarios[1][2]}, e fez faculdade ${funcionarios[2][2]}`)

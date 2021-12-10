const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
const medias = [10, 7, 9, 6]

let listaAlunosMedias = [alunos, medias]

const exibeNomeNota = (nomeDeAluno) => {

    if (listaAlunosMedias[0].includes(nomeDeAluno)) {

        indice = listaAlunosMedias[0].indexOf(nomeDeAluno)

        return listaAlunosMedias[0][indice] + ', sua nota é '+ listaAlunosMedias[1][indice]
    }else{
        return 'Aluno não cadastrado'
    }

}

console.log(exibeNomeNota('Juliana'))
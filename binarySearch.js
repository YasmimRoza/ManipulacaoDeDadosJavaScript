function pesquisa_binaria(lista, item){
    baixo = 0 
    alto = lista.length - 1

    while(baixo <= alto){
        meio = Math.round((baixo + alto) / 2)
        chute = lista[meio]

        if(chute == item){
            return meio
        }if(chute > item){
            alto = meio - 1
        }else{
            baixo = meio + 1
        }
    } 
    return 'None'
}

minha_lista = [1, 3, 5, 7, 9];

console.log(pesquisa_binaria(minha_lista, 3));//Return the position Array
console.log(pesquisa_binaria(minha_lista, -1));
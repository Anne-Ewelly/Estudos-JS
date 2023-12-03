/* Arquivo JS aula 05 Objetos */
//Objetos é uma esctrutura hibrida na qual vc guarda um conjunto de dados

// CRIAR OBJETO
let pessoa = {                    //objeto pessoa       igual = é um operador de atribuição
    nome   : 'Edson',             //propriedade nome
    idade  : 40,
    peso   : 83.5,
    altura : 1.75,
    doador : false,
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010] 
}


// OPERAÇÃO IMC = peso / (altura * altura)   imc -> indice de massa corporal
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)    //está entre () para fazer a conta primeiro

// .toFixed(X)

console.log("IMC " + imc.toFixed(2))    // limita o numero de casas decimais


// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Marina Maia"                          //igual = é um operador de atribuição
produtos.descricao = ['Arroz']
produtos.preco = [4.99]    

// Usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']    //como a propriedade produtos.descricao está com [] vazio e foi atribuido um valor 'Arroz' antes, é preciso usar ospreed operator para fazer a cópia de toda a propriedade para depois add mais valores, senão ele vai sob escrever
produtos.preco = [...produtos.preco, 9.99, 4.79]


// Usando spreed operator em objetos const
carros.marca  = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano    = [...carros.ano, '1985']
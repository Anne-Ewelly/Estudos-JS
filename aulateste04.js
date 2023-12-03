/* Arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
var test =  Array(10)
test[0] = "Oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'   //sobrepôs o mês da casa 0 que era 'Jan' 
meses[2] = 'kratos'  //sobrepôs o mês da casa 2 que era 'Mar' 

// ADICIONAR no final push = empurre
produtos.push('Açúcar', 'trigo', 'farinha')    //adiciona esses produtos no final da lista
codigos.push(40, 50, 60, 70)  //adiciona esses numeros no final da lista
meses.push('Mai', 'Jun', 'Ago', '07')


// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã')


// REMOVER de uma posicao especifica splice
// splice = emendar
// posicao inicial, quantos remover  ---- 0 ->posição inicial   2 -> quantos elementos remover   
codigos.splice(0, 2)  


// COPIAR array slice = fatiar porção
// posicao inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0 ,3)


// VER TAMANHO DO ARRAY length comprimento
// meses.length
// meses1.length
// meses2.lenght
meses.length    // Conta a quantidade de elementos tem o array -- ex.: meses.length 8 elementos


// spreed operator ... Representado por reticências ... , ele copia um array inteiro e adiciona elementos.
let teste = [...produtos, 'Ovo', 'Pera']
let teste2 = [...codigos, 15, 200]
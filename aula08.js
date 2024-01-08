/* Arquivo JS aula 08 DOM */

// DOM = Document Object Model
// Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteudos.
/*
navigator
window
 location
 document -> html -> head e body
 history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.



/* ANOTAÇÕES DE ANNE ----------------------------------------------------------------

.querySelector() ----- Seleciona um elemento do HTML


 EXEMPLO.:    document.querySelector('h1')     ----> Selecionando a tag h1
IMPRESSÃO NA TELA.: <h1 id="titulo">AULA 07</h1>

EXEMPLO.:    document.querySelector('#titulo')        ----> Jogo da velha # para selecionar por id
IMPRESSÃO NA TELA.: <h1 id="titulo">AULA 07</h1>

EXEMPLO.:    document.querySelector('.box')      ----> Selecionando por classe tem que colocar o ponto (.) Seleciona o 1º elemento
IMPRESSÃO NA TELA.: <div class="box">...</div>

EXEMPLO.:    document.querySelectorAll('h2')      ----> querySelectorAll seleciona todos os elementos 
IMPRESSÃO NA TELA.: <div class="box">...</div>

*/

//document.querySelector('h1')


// .querySelector()
// selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('h1')


//console.log(titulo)



/* ANOTAÇÕES DE ANNE ----------------------------------------------------------------

 .textContent       ----> Serve para alterar ou acessar o conteúdo

******** Se for apenas para acessar usar o nome da variável.textContent


 */

titulo.textContent = 'Anne'


// propriedade ou atributo textContent
// serve para acessar ou alterar conteudo
// de um elemento que foi selecionado
//console.log(titulo.textContent)
//console.log(titulo.innerHTML)

//titulo.textContent = 'DOM'
//console.log(titulo.textContent)

// .querySelectorAll()
// selecionar todos elemento com base na tag, #id ou .class
let testando = document.querySelectorAll('.box')
//console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
testando[0].textContent = 'texto qualquer'

// Existem também os métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementById()
.getElementsByClassName()
*/

let testeTag = document.getElementsByTagName('div')
//console.log(testeTag)
//document.write(testeTag[0].textContent)
//document.write(testeTag[1].textContent)

let testeId = document.getElementById('titulo')
//console.log(testeId)

let testeClass = document.getElementsByClassName('box')
//console.log(testeClass)
//document.write(testeClass[0].textContent)
//document.write(testeClass[1].textContent)

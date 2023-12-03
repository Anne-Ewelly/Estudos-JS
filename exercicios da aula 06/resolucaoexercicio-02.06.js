// Resolução do 2º segundo exercício


const dia = 10
const mes = 9
const ano = 2021
const mensagem = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const autor = "Aaron Swartz"


document.write(`${dia} / ${mes} / ${ano} <hr>`)

document.write("" + mensagem+ '<br>')

document.write("Autor: " + autor+ '<br>')




// Forma do professor
// Outra forma de imprimir em tela
// blockquote ou citação é utilizado para inserir um comentário de forma destacada com recuo de margem e espaçamento diante da linha anterior e diante da linha posterior.

document.write(`${dia} / ${mes} / ${ano} 
               <blockquote>&#10077; ${mensagem}&#10078;</blockquote>  
               <p>${autor}</p>

`)
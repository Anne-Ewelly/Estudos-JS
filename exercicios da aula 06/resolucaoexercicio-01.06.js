// Resolução do 1º primeiro exercício



let lutador = 'Anderson Silva'
let nacionalidade = 'Brasileiro'
let idade = 44 
let peso = 106
let altura = 1.83


// <br> quebra a linha e <p> cria um parágrafo 

document.write(`Lutador: ${lutador}<br>`)
document.write(`Nacionalidade: ${nacionalidade}<br>`)
document.write("Idade: " + idade+ " anos"+ '<br>')
document.write("Peso: " + peso + " kg " + '<br>')
document.write("Altura: " + altura+ " m"+ '<br>')


// Forma do professor
// Outra forma de imprimir na tela juntando no mesmo document.write

document.write(`<p>${lutador}</p>
                <p>${nacionalidade}</p>
                <p>${idade} anos </p>
                <p>${peso} kg </p>
                <p>${altura} m </p>  
`)



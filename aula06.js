// comentario em linha

/*
Comentario em bloco
*/

// criar variaveis use let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario

document.write(`Preço total R$ ${precoTotal}<br>`)

document.write("Preço teste R$ " + precoTotal+ '<br>')

document.write(`Produto do supermercado é ${produto} e o seu preço é ${precoUnitario}<br>`)


document.write(`Fui ao Bretas comprar ${quant} pacotes de ${produto} pelo valor de ${precoUnitario} cada pacote <br>`)



document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`)

// criar constante
const nome = 'Edson Maia'
document.write(`Eu tinha um professor de nome ${nome}<br>`)
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write("Nota Final " + imc.toFixed(2)+ '<br>')

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write("Nota Final " + notaFinal+ '<br>')

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(compraComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '<br>')

document.write(compraComDesconto + '<br>')

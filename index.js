// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima.
//Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const nomeDoFilme1 = "Interestellar"
const duracaoDoFilme1 = 170 //minutos
const eUmRemake1 = false
const premiosFilme1 = [" \"Oscar\", \"Satellite Awards\", \"Saturn Awards\""]

const nomeDoFilme2 = "Star Wars"
const duracaoDoFilme2 = 120 //minutos
const eUmRemake2 = false
const premiosFilme2 = [" \"Oscar\", \"Golden Globe\", \"Grammy\""]

const nomeDoFilme3 = "Dune"
const duracaoDoFilme3 = 164 //minutos
const eUmRemake3 = true
const premiosFilme3 = [" \"Oscar\", \"Grammy\", \"Saturn Awards\""]

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
//Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaDuraçaoDosFilmes = (duracaoDoFilme1 + duracaoDoFilme2 + duracaoDoFilme3) / 2 
console.log("Média da duração dos filmes:" , mediaDuraçaoDosFilmes)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas 
// criadas até aqui são verdadeiras.

const verificaSeEremake = eUmRemake1 && eUmRemake2 && eUmRemake3 
console.log("Todos os filmes são remakes?:" , verificaSeEremake)

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
//Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.


// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

//Filme 1

const filmeInterstellar = `${nomeDoFilme1.toUpperCase()} \nDuração do filme: ${duracaoDoFilme1} minutos\nÉ um Remake?: ${eUmRemake1}\nPrémios Recebidos: ${premiosFilme1} `

console.log(filmeInterstellar)

const filmeStarWars = `${nomeDoFilme2.toUpperCase()} \nDuração do filme: ${duracaoDoFilme2} minutos \nÉ um remake?: ${eUmRemake2}\nPrémios Recebidos: ${premiosFilme2} `

console.log(filmeStarWars)

const filmeDune = `${nomeDoFilme3.toUpperCase()} \nDuração do filme: ${duracaoDoFilme3} minutos \nÉ um remake?: ${eUmRemake3}\nPrémios Recebidos: ${premiosFilme3} `

console.log(filmeDune)






// // const arrayString = ["banana" , "abacate" , "maçã"]
// // const arrayNum = [1, 2, 3,]
// // const arrayAleatorio = ["nuvem", 3, true, "céu"]
// // const arrayUmValor = [09]

// // console.log(arrayString[0])
// // console.log(arrayAleatorio[1])
// // console.log(arrayAleatorio[2])














const objetosFilme1 = {
    nomeDoFilme1: "Interestellar",
    duracaoDoFilme1: 170,
    eUmRemake1: false,
    premiosFilme1: [" \"Oscar\", \"Satellite Awards\", \"Saturn Awards\""]
}

const objetosFilme2 = {
    nomeDoFilme2: "Star Wars",
    duracaoDoFilme2: 120,
    eUmRemake2: false,
    premiosFilme2: [" \"Oscar\", \"Golden Globe\", \"Grammy\""]
}

const objetosFilme3 = {
    nomeDoFilme3: "Dune",
    duracaoDoFilme3: 164,
    eUmRemake3: true,
    premiosFilme3: [" \"Oscar\", \"Grammy\", \"Saturn Awards\""]
}


const arrayObjetos = []

if(objetosFilme1.eUmRemake1 === true ){
    arrayObjetos.push(objetosFilme1)
}else{
    alert("Objeto não adicionado a array")
} if(objetosFilme2.eUmRemake2 === true){
    arrayObjetos.push(objetosFilme2)
}else{
    alert("Objeto não adcionado a array")
}if(objetosFilme3.eUmRemake3 === true){
    arrayObjetos.push(objetosFilme3)
}else{
    alert("Objeto não adicionado a array")
}



console.log("O filme que é remake foi adicionado aqui", arrayObjetos)

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item.
//Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaDuraçaoDosFilmes = (objetosFilme1.duracaoDoFilme1 + objetosFilme2.duracaoDoFilme2 + objetosFilme3.duracaoDoFilme3) / 2
console.log("Média da duração dos filmes:", mediaDuraçaoDosFilmes)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas
// criadas até aqui são verdadeiras.

const verificaSeEremake = objetosFilme1.eUmRemake1 && objetosFilme2.eUmRemake2 && objetosFilme3.eUmRemake3
console.log("Todos os filmes são remakes?:", verificaSeEremake)

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array.
//Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.


// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.



const filmeInterstellar = `${objetosFilme1.nomeDoFilme1.toUpperCase()} \nDuração do filme: ${objetosFilme1.duracaoDoFilme1} minutos\nÉ um Remake?: ${objetosFilme1.eUmRemake1}\nPrémios Recebidos: ${objetosFilme1.premiosFilme1} `

console.log(filmeInterstellar)

const filmeStarWars = `${objetosFilme2.nomeDoFilme2.toUpperCase()} \nDuração do filme: ${objetosFilme2.duracaoDoFilme2} minutos \nÉ um remake?: ${objetosFilme2.eUmRemake2}\nPrémios Recebidos: ${objetosFilme2.premiosFilme2} `

console.log(filmeStarWars)

const filmeDune = `${objetosFilme3.nomeDoFilme3.toUpperCase()} \nDuração do filme: ${objetosFilme3.duracaoDoFilme3} minutos \nÉ um remake?: ${objetosFilme3.eUmRemake3}\nPrémios Recebidos: ${objetosFilme3.premiosFilme3} `

console.log(filmeDune)




















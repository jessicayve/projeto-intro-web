filmes = [{
    nome: "Interstellar",
    duracao: 170,
    eUmRemake: false,
    premiosRecebidos: ["Oscar", "Satellite Awards", "Saturn Awards"]
},
{
    nome: "Star Wars",
    duracao: 120,
    eUmRemake: false,
    premiosRecebidos: ["Oscar", "Golden Globe", "Grammy"]
},
{
    nome: "Dune",
    duracao: 164,
    eUmRemake: true,
    premiosRecebidos: ["Oscar", "Grammy", "Saturn Awards"]

}]

// arrayParaGuardarObjetos = []


// if (filme1.eUmRemake === true) {
//     arrayParaGuardarObjetos.push(filme1)
// } else {
//     alert("Objeto do Filme 1 não adicionado")

// } if (filme2.eUmRemake === true) {
//     arrayParaGuardarObjetos.push(filme2)
// } else {
//     alert("Objeto do Filme 2 não adicionado")
// } if (filme3.eUmRemake === true) {
//     arrayParaGuardarObjetos.push(filme3)
// } else {
//     alert("Objeto do Filme 2 não adicionado")
// }


// console.log("Filmes que são remakes:", arrayParaGuardarObjetos)


const mediaDuracao = 170 + 120 + 164 / 3
console.log("Média de Duração:", mediaDuracao.toFixed(2))


// const verificaRemakes = eUmRemake1 && eUmRemake2 && eUmRemake3
// console.log("Remakes:",verificaRemakes)


// console.log(nomeFilme1.toUpperCase())
// console.log("Duração:", duracao1)
// console.log("É um remake?", eUmRemake1)
// console.log("Prêmios:", premiosRecebidos1)

// console.log(nomeFilme2.toUpperCase())
// console.log("Duração:", duracao2)
// console.log("É um remake?", eUmRemake2)
// console.log("Prêmios:", premiosRecebidos2)

// console.log(nomeFilme3.toUpperCase())
// console.log("Duração:", duracao3)
// console.log("É um remake?", eUmRemake3)
// console.log("Prêmios:", premiosRecebidos3)



// console.log("nome: "+filmes[0].nome)
// console.log("Duração: "+filmes[0].duracao)
// console.log("É um remake? "+filmes[0].eUmRemake)
// console.log("Prêmios: "+filmes[0].premiosRecebidos)

// console.log("nome: "+filmes[1].nome)
// console.log("Duração: "+filmes[1].duracao)
// console.log("É um remake? "+filmes[1].eUmRemake)
// console.log("Prêmios: "+filmes[1].premiosRecebidos)

// console.log("nome: "+filmes[2].nome)
// console.log("Duração: "+filmes[2].duracao)
// console.log("É um remake? "+filmes[2].eUmRemake)
// console.log("Prêmios: "+filmes[2].premiosRecebidos)

// for (let i = 0; i < 1; i++) {
//     console.log(filmes[0], filmes[1], filmes[2])
// }


function string(filmes) {

    for (let i = 0; i < filmes.length; i++) {
        console.log("O nome do filme é", filmes[i].nome.toUpperCase(), ".", "O filme tem ", filmes[i].duracao, "de duração.", "É um remake?", filmes[i].eUmRemake, "Os prêmios recebidos são", filmes[i].premiosRecebidos.join())
    }
}
string(filmes)



// const filme1Filter = filmes.filter((filme) => {
//     if (filme.nome === "Interstellar" || filme.nome === "Star Wars" || filme.nome === "Dune") {
//         return filme
//     } else {
//         return alert("Não encontrado")
//     }
// })


// console.log("filter:", filme1Filter)


function searchFilmes() {
    let input = document.getElementById("search-bar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("filmes");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {

            x[i].style.display = "none";
           
        }
        else {

            x[i].style.display = "block";


        }
    }
    if(input === "")
    alert("Filme não encontrado")
}



// let novoParagrafo = ""
// let conteudoInput = ""

// const adicionar = () => {
//     novoParagrafo = document.getElementById("paragrafo");
//     conteudoInput = document.getElementById("texto");
//     novoParagrafo.innerHtml += conteudoInput.value;
//     conteudoInput.value ="";

// }
// const valorAtualInput = () =>{
//     conteudoInput = document.getElementById("texto");
//     console.log(conteudoInput.value)
// }







































console.log("Felipe")
console.log(19)
console.warn("atenção")
console.error("um erro")

/*
3 formas de criar variaveis
let
var
const
*/

let nome = "Felipe"
let idade = 19
let telefone = null
console.log(nome, idade)
nome = ("Felipe Giacobbe")
console.log(nome)

let nomeCompleto = ("")
nomeCompleto = prompt ("informe seu nome completo:")
 
let cor = prompt ("Informe uma cor: \n 1-azul \n 2-Vermelho \n 3-preto \n 4-Verde \n 5-Rosa \n 6-Laranja")
let corDeFundo = null
 
if(cor == "1"){
    corDeFundo = "blue"
}
else if(cor =="2"){
    corDeFundo = "red"
}
else if(cor == "3"){
    corDeFundo = "black"
}
else if(cor =="4"){
    corDeFundo = "green"
}
else if(cor == "5"){
    corDeFundo = "pink"
}
else if(cor == "6"){
    corDeFundo = "orange"
}
else{
    corDeFundo = "yellow"
}
 
document.body.style.backgroundColor = corDeFundo
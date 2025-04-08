



function fnTrocarCorDeFundo (){

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
}

fnTrocarCorDeFundo()


function fnBanner1(){
    document.getElementById("banner").src="imagens/banner.jpg"
}
 
function fnBanner2(){
    document.getElementById("banner").src="imagens/banner02.jpg"
}
 
function fnBanner3(){
    document.getElementById("banner").src="imagens/banner03.jpg"
}
 
function fnDestaque1Trocar(){
    document.getElementById("destaque1").src="imagens/i.png"
}
 
function fnDestaque1Original(){
    document.getElementById("destaque1").src="imagens/manuteção3.jpg.jpg"
}
 
 
function fnDestaque2Trocar(){
    document.getElementById("destaque2").src="imagens/destaque2-1.jpg"
}
 
function fnDestaque2Original(){
    document.getElementById("destaque2").src="imagens/destaque2.jpg"
}
 
function fnDestaque3Trocar(){
    document.getElementById("destaque3").src="imagens/destaque3-1.jpg"
}
 
function fnDestaque3Original(){
    document.getElementById("destaque3").src="imagens/destaque3.jpg"
} 


function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome  + " - " + email + " - " + mensagem
    document.getElementById("informacoes").innerHTML = informacoesCompleta


    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("mensagem").value = ""

}
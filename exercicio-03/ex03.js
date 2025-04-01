// Se a pessoa tiver menos de 18 anos exiba a mensagem "Olá [nome] você ainda não pode fazer aulas de direção"
//Se a pessoa tiver 18 anos ou mais exiba a mensagem "Olá [nome], seja bem vindo(a) a nossa escola! Já fez sua matrícula?

let nome = prompt("Informe seu nome")
let idade =parseInt(prompt ("Digite sua idade"))

if (idade < 18){
   alert("Olá"  +[nome]+  "você ainda não pode fazer aulas de direção") 
}
else if (idade >= 18){
    alert("Olá"  +[nome]+  ", seja bem vindo(a) a nossa escola! Já fez sua matrícula?")
}
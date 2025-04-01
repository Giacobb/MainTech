let num1 = parseFloat(prompt("Digite um número: "))
let num2 = parseFloat(prompt("Digite um número: "))
let operacao = prompt("Escolha uma das alternativas que deseja realizar a conta \n1-Adição | + \n2-Subtração | - \n3-Divisão |\ \n4-Multiplicação | *")
if(operacao == "+"){
    alert("Resultado da conta é" + (num1 + num2))
}
else if(operacao == "-"){
    alert("Resultado da conta é" + (num1 - num2))
}
else if(operacao == "/"){
    alert("Resultado da conta é" + (num1 / num2))
}
else if(operacao == "*"){
    alert("Resultado da conta é" + (num1 * num2))
}

else(
    alert("voce não digitou uma operação valida")
)

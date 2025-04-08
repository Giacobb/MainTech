function fnSomar(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) + parseFloat(n2)
    console.log(total)
    document.getElementById("Resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnsubtrair(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) - parseFloat(n2)
    console.log(total)
    document.getElementById("Resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnmult(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) * parseFloat(n2)
    console.log(total)
    document.getElementById("Resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}
function fndiv(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) / parseFloat(n2)
    console.log(total)
    document.getElementById("Resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}


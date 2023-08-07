function calculaIMC() {
    document.getElementById("altura").style.borderColor = "#fff";
    document.getElementById("altura").style.backgroundColor = "#fff";
    document.getElementById("peso").style.borderColor = "#fff";
    document.getElementById("peso").style.backgroundColor = "#fff";

    if (document.getElementById("peso").value == "") {
        alert("Por favor, preencha o campo peso");
        document.getElementById("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "#ffe5e5";
        document.getElementById("peso").focus();
        return false;
    }

    if (document.getElementById("altura").value == "") {
        alert("Por favor, preencha o campo altura");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "#ffe5e5";
        document.getElementById("altura").focus();
        return false;
    }

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = Math.round(peso/(altura*altura));
    
    alert("Seu IMC é: " +resultado);
    return true;
}
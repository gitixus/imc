var url = window.location.hash;
url = url.slice(1, -1)
document.getElementById("resul").innerHTML = url

if (url < 20) {
    document.getElementById("texto").innerHTML = "Su resultado es: Falta de peso."
}
if (url > 20 && url < 25) {
    document.getElementById("texto").innerHTML = "Su resultado es: Peso normal."
}

if (url > 25 && url < 30) {
    document.getElementById("texto").innerHTML = "Su resultado es: Sobrepeso."
}

if (url > 30 && url < 40) {
    document.getElementById("texto").innerHTML = "Su resultado es: Obesidad."
}

if (url > 40) {
    document.getElementById("texto").innerHTML = "Su resultado es: Fuerte obesidad - Obesidad mórbida."
}
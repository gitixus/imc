var url = window.location.hash;
url = url.slice(1)
document.getElementById("resul").innerHTML = url

if (url < 20) {
    texto = "Su resultado es: <b>Falta de peso</b>."
}
if (url > 20 && url < 25) {
    texto = "Su resultado es: <b>Peso normal</b>."
}

if (url > 25 && url < 30) {
    texto = "Su resultado es: <b>Sobrepeso</b>."
}

if (url > 30 && url < 40) {
    texto = "Su resultado es: <b>Obesidad</b>."
}

if (url > 40) {
    texto = "Su resultado es: <b>Fuerte obesidad - Obesidad mórbida</b>."
}

document.getElementById("texto").innerHTML = texto
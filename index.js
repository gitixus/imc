function calc() {
  altura = document.getElementById("altura").value;

  if (altura.length == 0 || altura.length <= 1 || altura.length >= 4) {
    alert("Escriba la altura en centímetros");
    return;
  }

  altura = Number(altura)
  altura = parseFloat(altura) / 100
  altura = altura ** 2

  peso = document.getElementById("peso").value;

  if (peso.length == 0 || peso.length <= 1 || peso.length >= 4) {
    alert("Escriba el peso en kilogramos");
    return;
  }
  peso = Number(peso)

  total = peso / altura
  document.getElementById("resul").innerHTML = "Su IMC es: " + total.toFixed(2)
}


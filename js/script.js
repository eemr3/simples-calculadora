function insert(num) {
  let numero = document.getElementById("resultado");
  numero.innerHTML += num;
}

function clearResult() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let calcular = document.getElementById("resultado").innerHTML;
  if (calcular) {
    document.getElementById("resultado").innerHTML = eval(calcular);
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}

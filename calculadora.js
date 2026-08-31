function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Divisao por zero nao e permitida');
  }
  return a / b;
}

function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

function raizQuadrada(numero) {
  if (numero < 0) {
    throw new Error('Nao e possivel calcular raiz de numero negativo');
  }
  return Math.sqrt(numero);
}

module.exports = { soma, subtrai, multiplica, divide, potencia, raizQuadrada };
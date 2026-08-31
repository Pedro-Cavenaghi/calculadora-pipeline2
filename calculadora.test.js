const { soma, subtrai, multiplica, divide, potencia, raizQuadrada } = require('./calculadora');

test('deve somar dois numeros corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});

test('deve subtrair dois numeros corretamente', () => {
  expect(subtrai(5, 2)).toBe(3);
});

test('deve multiplicar dois numeros corretamente', () => {
  expect(multiplica(3, 4)).toBe(12);
});

test('deve dividir dois numeros corretamente', () => {
  expect(divide(10, 2)).toBe(5);
});

test('deve lancar erro ao dividir por zero', () => {
  expect(() => divide(10, 0)).toThrow('Divisao por zero nao e permitida');
});

test('deve calcular a potencia corretamente', () => {
  expect(potencia(2, 3)).toBe(8);
});

test('deve calcular a raiz quadrada corretamente', () => {
  expect(raizQuadrada(9)).toBe(3);
});

test('deve lancar erro ao calcular raiz quadrada de numero negativo', () => {
  expect(() => raizQuadrada(-9)).toThrow('Nao e possivel calcular raiz de numero negativo');
});
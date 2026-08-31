const { soma, subtrai, multiplica, divide } = require('./calculadora');

test('deve somar dois numeros corretamente', () => {
  expect(soma(2, 3)).toBe(99);
});

test('deve subtrair dois numeros corretamente', () => {
  expect(subtrai(5, 2)).toBe(3);
});

test('deve multiplicar dois numeros corretamente', () => {
  expect(multiplica(4, 3)).toBe(12);
});

test('deve dividir dois numeros corretamente', () => {
  expect(divide(10, 2)).toBe(5);
});

test('deve lancar erro ao tentar dividir por zero', () => {
  expect(() => divide(10, 0)).toThrow('Divisao por zero nao e permitida');
});
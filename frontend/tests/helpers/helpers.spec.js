import { exchange, prettyDigit, beautify } from '../../src/helpers';

describe('exchange', () => {

  [
    {amount: 100, rate: 2.0, expected: 200},
    {amount: 100, rate: 2.5, expected: 250},
    {amount: 100, rate: 0.855, expected: 85}
  ].forEach(({ amount, rate, expected }) => {

    it(`exchanges the amount - ${ amount } by given rate - ${ rate }`, () => {
      expect(exchange(amount, rate)).toEqual(expected);
    })

  });

});

describe('prettyDigit', () => {
  // Преобразует число (digit) в "красивое число", в зависимости
  // от расположения (index) этого числа в исходной цифре
  //  Пример:
  //    Исходное цифра - 62725, ожидаемый результат - 60500
  //      prettyDigit(5, 0, 5) => 0
  //      prettyDigit(2, 1, 5) => 0
  //      prettyDigit(7, 2, 5) => 5
  //      prettyDigit(2, 3, 5) => 0
  //      prettyDigit(6, 4, 5) => 6

  const digitLength = 5;
  [
    {digit: 5, index: 0, length: digitLength, expected: 0},
    {digit: 2, index: 1, length: digitLength, expected: 0},
    {digit: 7, index: 2, length: digitLength, expected: 5},
    {digit: 2, index: 3, length: digitLength, expected: 0},
    {digit: 6, index: 4, length: digitLength, expected: 6}
  ].forEach(({ digit, index, length, expected }) => {

    it(`prettifies digit ${ digit }`, () => {
      expect(prettyDigit(digit, index, length)).toEqual(expected);
    })

  });

});

describe('beautify', () => {
  [
    { amount: 52, expected: 50 },
    { amount: 532, expected: 500 },
    { amount: 1321, expected: 1000 },
    { amount: 62725, expected: 60500 },
  ].forEach(({amount, expected}) => {

    it(`beautifies digit ${ amount }`, () => {
      expect(beautify(amount)).toEqual(expected);
    })

  });
});

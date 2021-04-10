
export const prettyDigit = (digit, index, length) => {
  if (index === length - 1) return digit;
  if (index <= 1) return 0;
  return  digit < 5 ? 0 : 5;
};

export const exchange = (amount, rate) => {
  return Math.trunc(amount * rate);
};

export const beautify = (amount) => {
  const digits = Array.from(amount.toString(), d => Number(d));
  const beautifiedDigits = digits.reverse().map(
    (digit, index) => prettyDigit(digit, index, digits.length)
  );

  return parseInt(beautifiedDigits.reverse().join(''));
};

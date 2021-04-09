const state = {
  donationAmount: 40,
  suggestedAmounts: [40, 100, 200, 1000, 2500, 5000],
  currencyCode: 'USD',
  locale: 'en-US',
  currencies: [
    {name: 'US Dollar', code: 'USD', symbol: '$', rate: 1},
    {name: 'Euro', code: 'EUR', symbol: '€', rate: 0.897597},
    {name: 'British Pound', code: 'GBP', symbol: '£', rate: 0.81755},
    {name: 'Russian Ruble', code: 'RUB', symbol: '₽', rate: 63.461993},
  ]
};

const getters = {
  currency: state => {
    return state.currencies.find(c => c.code === state.currencyCode);
  },
  currenciesOptions: state => {
    return state.currencies.map(
      c => {
        return {
          value: c.code,
          text: `${ c.code } (${ c.symbol })`
        }
      }
    )
  },
  exchangedAmounts: (state, getters) => {
    const exchange = amount => Math.trunc(amount * getters.currency.rate);

    // Преобразует число (digit) в "красивое число", в зависимости
    // от расположения (index) этого числа в исходной цифре
    //  Пример:
    //    Исходное цифра - 62725, ожидаемый результат - 60500
    //      prettyDigit(5, 0, 5) => 0
    //      prettyDigit(2, 1, 5) => 0
    //      prettyDigit(7, 2, 5) => 5
    //      prettyDigit(2, 3, 5) => 0
    //      prettyDigit(6, 4, 5) => 6
    const prettyDigit = (digit, index, length) => {
      if (index === length - 1) return digit;
      if (index <= 1) return 0;
      return  digit < 5 ? 0 : 5;
    };

    const beautify = amount => {
      const digits = Array.from(amount.toString(), d => Number(d));
      const beautifiedDigits = digits.reverse().map(
        (digit, index) => prettyDigit(digit, index, digits.length)
      );

      return parseInt(beautifiedDigits.reverse().join(''));
    };

    return state.suggestedAmounts.map(
      amount => {
        const exchangedAmount = exchange(amount);
        return beautify(exchangedAmount).toLocaleString(state.locale)
      }
    )
  }
};

const mutations = {
  setCurrencyCode: (state, code) => {
    state.currencyCode = code;
  }
};

const actions = {
  changeCurrency: ({commit}, currency) => {
    commit('setCurrencyCode', currency);
  }
};

export default {
  state, getters, mutations, actions
};

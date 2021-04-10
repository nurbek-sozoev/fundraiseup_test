import { exchange, beautify } from '../../helpers';
import backend from '../../api/backend';

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
  locale: state => state.locale,
  donationAmount: state => {
    return state.donationAmount === 0 ? '' : state.donationAmount;
  },
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
    return state.suggestedAmounts.map(
      amount => {
        const exchangedAmount = exchange(amount, getters.currency.rate);
        return beautify(exchangedAmount);
      }
    )
  }
};

const mutations = {
  setCurrencyCode: (state, code) => {
    state.currencyCode = code;
  },
  setDonationAmount: (state, amount) => {
    state.donationAmount = Math.trunc(parseInt(amount));
  }
};

const actions = {
  changeCurrency: ({commit}, currency) => {
    commit('setCurrencyCode', currency);
  },
  changeAmount: ({commit}, amount) => {
    commit('setDonationAmount', amount);
  },
  donate: ({commit, state}) => {
    backend.post('/donations', {
      amount: state.donationAmount,
      currency: state.currencyCode
    }).then(() => {
      alert('Thank you for your donation!');
      commit('setDonationAmount', 40);
      commit('setCurrencyCode', 'USD');
    }).catch(error => {
      alert('Something went wrong!');
      console.log(error);
    });
  }
};

export default {
  state, getters, mutations, actions
};

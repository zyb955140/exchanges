const _ = require('lodash');
const { coinMap } = require('./meta');
const Utils = require('./../../utils');

const { floor } = Math;
function formatTime(o) {
  return {
    ...o,
    startTime: o.startTime ? floor(o.startTime / 1000) : null,
    endTime: o.endTime ? floor(o.endTime / 1000) : null,
  };
}

function getFilteredBalances(ds, o = {}) {
  ds = _.filter(ds, d => d.balance !== 0);
  return _.map(ds, (d) => {
    return {
      balance_str: d.balanceStr,
      balance: d.balance,
      coin: d.coinType,
      locked_balance_str: d.freezeBalanceStr,
      locked_balance: d.freezeBalance
    };
  });
}

function _map(d) {
  return {
    pair: d.symbol,
    bid_price: d.buy,
    ask_price: d.sell,
    feeRate: d.feeRate,
    trading: d.trading,
    last_price: d.lastDealPrice,
    time: new Date(d.datetime),
    bid_volume_24: d.volValue,
    ask_volume_24: d.vol
  };
}

function formatPrices(ds) {
  return _.map(ds, _map).filter(d => d.trading);
}

function formatTicksO(o = {}) {
  const opt = {};
  if (o.pair) {
    opt.symbol = o.pair;
  }
  return opt;
}
function formatTicks(ds) {
  if (Array.isArray(ds)) {
    return _.map(ds, _map).filter(d => d.trading);
  }
  return _map(ds);
}

function formatOrderO(o) {
  const coinInfo = coinMap[o.pair.split('-')[0]];
  const { tradePrecision } = coinInfo;
  o.amount = o.amount.toFixed(tradePrecision);
  if (o.type) o.type = o.type.toUpperCase();
  o = Utils.replace(o, { side: 'type' });
  return o;
}

module.exports = {
  formatTime, getFilteredBalances, formatPrices, formatTicks, formatOrderO, formatTicksO
};


const _ = require('lodash');
//
const Exchanges = require('./../index');
const config = require('./../config');
const Utils = require('./utils');

const wsList = [
  // {
  //   fn: 'wsTicks',
  //   params: {
  //     pairs: ['EOS-USDT']
  //   },
  //   name: 'wsTicks'
  // },
  // {
  //   fn: 'wsFutureTicks',
  //   params: {
  //     contract_type: 'quarter', // / ['this_week', 'quarter', 'next_week'],
  //     pairs: ['BTC-USDT']
  //   },
  //   name: '期货tick数据...'
  // },
  // {
  //   fn: 'wsSwapTicks',
  //   params: {
  //   },
  //   name: '永续合约tick...'
  // },
  // {
  //   fn: 'wsFutureBalance',
  //   params: {
  //     interval: 4000
  //   },
  //   name: ''
  // },
  // {
  //   fn: 'wsFutureIndex',
  //   params: {
  //     pairs: [
  //       'EOS-USDT'
  //     ]
  //   },
  //   name: '合约指数'
  // },
  // {
  //   fn: 'wsFutureOrder',
  //   params: {
  //     interval: 4000
  //   },
  //   name: ''
  // },
  // {
  //   fn: 'wsFuturePosition',
  //   params: {
  //     interval: 4000
  //   },
  //   name: ''
  // },
  // {
  //   fn: 'wsBalance',
  //   params: {
  //     interval: 4000
  //   },
  //   name: '余额数据'
  // },
  // {
  //   fn: 'wsReqBalance',
  //   params: {
  //   },
  //   name: '余额数据'
  // },


  // {
  //   fn: 'wsReqOrders',
  //   params: {
  //     pairs: ['EOS-USDT']
  //   },
  // },

  // {
  //   fn: 'wsOrder',
  //   params: {
  //   },
  //   name: '登录'
  // },

  // {
  //   fn: 'wsFutureKlines',
  //   params: {
  //   },
  //   name: '期货tick k线图...'
  // },
  // {
  //   fn: 'wsFutureKline',
  //   params: {
  //     pair: 'BTC-USD'
  //   },
  //   name: '期货tick k线图...(指定pair)'
  // },
  // {
  //   fn: 'wsFutureDepth',
  //   params: {
  //     contract_type: 'quarter',
  //     pairs: ['EOS-USDT']
  //   },
  //   name: '期货深度图'
  // },
  // {
  //   fn: 'wsDepth',
  //   params: {
  //     contract_type: 'quarter',
  //     pairs: ['EOS-USDT']// 'BTC-USDT',
  //   },
  //   name: '深度图'
  // },
  // {
  //   fn: 'wsFutureBalances',
  //   params: {
  //   },
  //   name: 'ws的余额'
  // },
];

function testOneExchangeWs(exName, list) {
  const ex = Utils.getExchange(exName);
  _.forEach(list, (o) => {
    const { fn, params } = o;
    ex[fn](params, (ds) => {
      console.log(ds, fn);
    });
  });
}

console.log('okexV3..');
testOneExchangeWs('okexV3', wsList);


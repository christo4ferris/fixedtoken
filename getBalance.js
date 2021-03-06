/*
 SPDX-License-Identifier: Apache2.0
*/
var Web3 = require('web3');
var Bignumber = require('bignumber.js');
var abi = require('./abi.json');
var provider = "https://fabproxy.mybluemix.net";
var web3 = new Web3(new Web3.providers.HttpProvider(provider));
var div = Math.pow(10, 18);
var fixedsupplytokenContract = web3.eth.contract(abi);
// YOU NEED A CONTRACT ADDRESS HERE FROM deploy.js
var addr = 'fcfec81c6e57a4461df1dadd475ea99db8258a90';
// YOU NEED A REGISTERED FABRIC-EVM ACCOUNT HERE
var owner = '0x613ac660a26a66a52eadc02cda9f6c7e7326e675';
var A = '0x537627a1e9456be6fc015800d23cf91a93555fe6';
var B = '0x853c507c8abde6d6d82f2e84cc4ca65f82ae5a09';
var C = '0x861256673241f8a9e3b086b1b01e76143253c8fc';
web3.eth.defaultAccount = owner;

function balance(acct) {
  var bal = web3.fromWei(myContract.balanceOf(acct), 'ether');
  console.log("Balance of " + acct + " = " + bal.toLocaleString('en'));
}

var myContract = fixedsupplytokenContract.at(addr);
console.log("Name: " + myContract.name());
console.log("Owner: " + myContract.owner());
console.log("Symbol: " + myContract.symbol());

balance(web3.eth.defaultAccount);
myContract.transfer(B, web3.toWei(100, 'ether'));
// now transfer some tokens from B to A
web3.eth.defaultAccount = B;
myContract.transfer(A, web3.toWei(20, 'ether'));
web3.eth.defaultAccount = A;
myContract.transfer(C, web3.toWei(10, 'ether'));
balance(owner);
balance(A);
balance(B);
balance(C);
